#!/usr/bin/env bats

@test "manifest with no violations piped to stdin returns 0 exit status" {
  bin/gator validate < "$BATS_TEST_DIRNAME/fixtures/manifest-no-violations.yaml"
  if [ "$?" -ne 0 ]; then
    printf "ERROR: got exit status %s but wanted 0\n" "$?"
    exit 1
  fi
}

@test "manifest with violations piped to stdin returns 1 exit status" {
  ! bin/gator validate < "$BATS_TEST_DIRNAME/fixtures/manifest-with-violations.yaml"
}

@test "manifest with no violations included as flag returns 0 exit status" {
  run bin/gator validate --filename="$BATS_TEST_DIRNAME/fixtures/manifest-no-violations.yaml"
  if [ "$status" -ne 0 ]; then
    printf "ERROR: got exit status %s but wanted 0\n" "$status"
    exit 1
  fi
}

@test "manifest with violations included as flag returns 1 exit status" {
  run bin/gator validate --filename="$BATS_TEST_DIRNAME/fixtures/manifest-with-violations.yaml"
  if [ "$status" -ne 1 ]; then
    printf "ERROR: got exit status %s but wanted 1\n" "$status"
    exit 1
  fi
}
