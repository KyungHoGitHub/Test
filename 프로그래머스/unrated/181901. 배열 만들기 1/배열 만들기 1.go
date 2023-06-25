func solution(n int, k int) []int {
    var test[]int
    for i := k; i<= n ; i+= k{
        test = append(test,i)
    }
    return test
}