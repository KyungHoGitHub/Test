func solution(n int) []int {
    test := make([]int, 0)
    for i := 1; i<=n; i +=2 {
        test = append(test,i)
    }
    return test
}