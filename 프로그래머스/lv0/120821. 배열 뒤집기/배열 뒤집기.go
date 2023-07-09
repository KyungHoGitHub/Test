func solution(num_list []int) []int {
    value := len(num_list)
	test := make([]int, value)

	for i := 0; i < value; i++ {
		test[i] = num_list[value-i-1]
	}

	return test
}

