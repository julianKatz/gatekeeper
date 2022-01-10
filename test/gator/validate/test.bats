#!/usr/bin/env bats

@test "manifest with no violations piped to stdin returns 0 exit status" {
  bin/gator validate < "$BATS_TEST_DIRNAME/fixtures/manifests/with-policies/no-violations.yaml"
  if [ "$?" -ne 0 ]; then
    printf "ERROR: got exit status %s but wanted 0\n" "$?"
    exit 1
  fi
}

@test "manifest with violations piped to stdin returns 1 exit status" {
  ! bin/gator validate < "$BATS_TEST_DIRNAME/fixtures/manifests/with-policies/with-violations.yaml"
}

@test "manifest with no violations included as flag returns 0 exit status" {
  bin/gator validate --filename="$BATS_TEST_DIRNAME/fixtures/manifests/with-policies/no-violations.yaml"
  if [ "$?" -ne 0 ]; then
    printf "ERROR: got exit status %s but wanted 0\n" "$?"
    exit 1
  fi
}

@test "manifest with violations included as flag returns 1 exit status" {
  ! bin/gator validate --filename="$BATS_TEST_DIRNAME/fixtures/manifests/with-policies/with-violations.yaml"
}

@test "multiple files passed in flags is supported" {
  bin/gator validate --filename="$BATS_TEST_DIRNAME/fixtures/manifests/with-policies/no-violations.yaml" --filename="$BATS_TEST_DIRNAME/fixtures/manifests/with-policies/no-violations-2.yaml"
  if [ "$?" -ne 0 ]; then
    printf "ERROR: got exit status %s but wanted 0\n" "$?"
    exit 1
  fi
}

@test "stdin and flag are not supported in combination" {
  ! bin/gator validate --filename="$BATS_TEST_DIRNAME/fixtures/manifests/with-policies/no-violations.yaml" < "$BATS_TEST_DIRNAME/fixtures/manifests/with-policies/no-violations-2.yaml"
}
