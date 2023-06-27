func solution(num1 int, num2 int) int {
    test := float64(num1) / float64(num2) // 범위를 변경하여 연산
    result := int(test *1000)
    return result
}