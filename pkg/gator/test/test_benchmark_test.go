package test

import (
	"bufio"
	"fmt"
	"os"
	"testing"

	"github.com/open-policy-agent/gatekeeper/pkg/gator"

	"k8s.io/apimachinery/pkg/apis/meta/v1/unstructured"
)

var (
	twoHundredPodsPath string = "fixtures/200-pods.yaml"
	twoHundredPods     []*unstructured.Unstructured

	fiveHundredPodsPath string = "fixtures/500-pods.yaml"
	fiveHundredPods     []*unstructured.Unstructured

	oneThousandPodsPath string = "fixtures/1000-pods.yaml"
	oneThousandPods     []*unstructured.Unstructured

	policy []*unstructured.Unstructured
)

func init() {
	policyDocuments := []string{
		"fixtures/policy/k8scontainerlimits/template.yaml",
		"fixtures/policy/k8scontainerlimits/container-must-have-limits.yaml",
		"fixtures/policy/k8srequiredlabels/template.yaml",
		"fixtures/policy/k8srequiredlabels/all-must-have-owner.yaml",
		"fixtures/policy/k8suniqueingresshost/template.yaml",
		"fixtures/policy/k8suniqueingresshost/unique-ingress-host.yaml",
	}

	// declare err variable so we use the `policy` that's outside of this closure
	var err error
	policy, err = readFiles(policyDocuments)
	if err != nil {
		panic(err)
	}

	twoHundredPods, err = readFiles([]string{twoHundredPodsPath})
	if err != nil {
		panic(err)
	}
	fiveHundredPods, err = readFiles([]string{fiveHundredPodsPath})
	if err != nil {
		panic(err)
	}
	oneThousandPods, err = readFiles([]string{oneThousandPodsPath})
	if err != nil {
		panic(err)
	}
}

func BenchmarkTestWithReferentialData(b *testing.B) {
	tcs := map[string]struct {
		clusterContents          []*unstructured.Unstructured
		referentialDataSupported bool
	}{
		"Referential: 200 pods": {
			clusterContents:          twoHundredPods,
			referentialDataSupported: true,
		},
		"Non-referential: 200 pods": {
			clusterContents:          twoHundredPods,
			referentialDataSupported: true,
		},
		"Referential: 500 pods": {
			clusterContents:          fiveHundredPods,
			referentialDataSupported: true,
		},
		"Non-referential: 500 pods": {
			clusterContents:          fiveHundredPods,
			referentialDataSupported: true,
		},
		"Referential: 1000 pods": {
			clusterContents:          oneThousandPods,
			referentialDataSupported: true,
		},
		"Non-referential: 1000 pods": {
			clusterContents:          oneThousandPods,
			referentialDataSupported: true,
		},
	}

	for name, tc := range tcs {
		uns := []*unstructured.Unstructured{}
		uns = append(uns, policy...)
		uns = append(uns, tc.clusterContents...)

		b.Run(name, func(b *testing.B) {
			for n := 0; n < b.N; n++ {
				Test(uns, tc.referentialDataSupported)
			}
		})
	}
}

func readFiles(filenames []string) ([]*unstructured.Unstructured, error) {
	var unstrucs []*unstructured.Unstructured

	for _, filename := range filenames {
		file, err := os.Open(filename)
		if err != nil {
			return nil, fmt.Errorf("opening file %q: %w", filename, err)
		}
		defer file.Close()

		us, err := gator.ReadK8sResources(bufio.NewReader(file))
		if err != nil {
			return nil, fmt.Errorf("reading file %q: %w", filename, err)
		}

		unstrucs = append(unstrucs, us...)
	}

	return unstrucs, nil
}
