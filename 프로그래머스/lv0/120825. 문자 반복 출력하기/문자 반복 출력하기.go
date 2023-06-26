import "strings"

func solution(my_string string, n int) string {
  	var test string
	for _, char := range my_string {
        test += strings.Repeat(string(char), n) // func Repeat (s string, coutn int ) 문자열을 특정 횟수 만큼 반복하는 함수 사용
	}
	return test
}