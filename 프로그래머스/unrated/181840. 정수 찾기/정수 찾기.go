func solution(num_list []int, n int) int {
    for _, v := range num_list{
        if v ==n{
            return 1
        }
    }
    return 0
}