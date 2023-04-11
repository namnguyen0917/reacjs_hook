# Hook
# useState
  - Khi trạng thái của dữ liệu thay đổi thì giao diện tự động thay đổi (render lại dữ liệu). https://react.dev/reference/react/useState
  - Syntax :
    - const [state, setState] = useState(InitialState);
  - Chú ý : 
    - InitialState chỉ khơi tạo một lần duy nhất có thể là useState (string, array, object, func, characters, true/false);
    - Component dc re-render sau khi 'setState'.
    - Set State với callbacks.
    - Initial State với callbacks.
    - Set state thay thế state bằng giá trị mới.
    - Khi set state 1 giá trị mới giống với giá trị cũ thì component KHÔNG re-render lại.
  - Example:
    - https://codesandbox.io/s/nervous-leaf-sge400?file=/src/App.js
    - Radio and checkbox https://codesandbox.io/s/radio-and-check-box-39s976
    - https://codesandbox.io/s/awesome-heyrovsky-vzi23m
# useEffect
  - Cho phép thực hiện side effect bên trong các function component. Side-effects có thể là những thứ sau trong ứng dụng:
    - Hiển thi dữ liệu ra màn hình.
    - EventListener.
    - Lấy dữ liệu – fetching data.
    - Gọi một function có side effects.
    - Thay đổi DOM.
    - Gọi hàm Math.random().
    - ..v.v.
  - Có 2 loại side effect chính là:
    - Effects không cần Cleanup.
    - Effects cần phải Cleanup(tránh tình trạng rò rỉ bộ nhớ).
  - Syntax :
    - useEffect(effectFunction, arrayDependencies):
      - (1) useEffect(Callback): Mỗi khi component re-render là nó gọi lại , Gọi callback sau ỗi khi component add elenment vào DOM.
      - (2) useEffect(Callback,[]): Chỉ gọi 1 lần sau khi component mounted.
      - (3) useEffect(Callback,[dependencies]): Callback sẻ được gọi lại mỗi khi dependencies thay đôi.
  - Life cycle:
    - Bạn sẽ gây ra 1 event (thay đổi state/props, re-render từ component cha,...)
    - Render component.
    - Màn hình UI được cập nhật.  
    - Chạy useEffect.
  - Chú ý : 
    - Callback luôn dc gọi sau khi component mounted.
    - (A) Clearup function luôn được gọi trướt khi component unmounted.
    - (B) Clearup function luôn được gọi trướt khi callback được gọi ( trừ unmounted).
  - Example :
    - (1).https://codesandbox.io/s/useeffect-callback-155cgm 
    - (2).https://codesandbox.io/s/seeffect-callback-u0smnc
    - (3).https://codesandbox.io/s/useeffect-callback-dep-bbqldz
    - (2)(A).https://codesandbox.io/s/practical-mestorf-wukljz 
    - (3)(B).https://codesandbox.io/s/black-voice-pv3vyd
# useLayoutEffect
  - Là một hook hoạt động tương tự như useEffect hook. Điểm khác nhau giữa 2 hooks này là thứ tự thực hiện các công việc mình đã liệt kê dưới đây:
  - Life cycle:
    - Bạn sẽ gây ra 1 event (thay đổi state/props, re-render từ component cha,...).
    - Render component.
    - Chạy useLayoutEffect, và react sẽ đợi đến khi nào nó hoàn thành.  
    - Màn hình UI được cập nhật.
  - Example :
    - https://codesandbox.io/s/zealous-saha-wbsqim
# useRef
# useCallback
# useMemo
# useReducer
# useEx
  - Text
  - Syntax :
    - aaaaaa
  - Chú ý : 
    - cccc
  - Ex:
    - ccc
# Router in react 
  - https://codesandbox.io/s/router-zg5ke4
# CSS in react 
  - Syntax , Module.css , sass , clsx
  - CSS folder structure / directory structure , create css global.
  - https://codesandbox.io/s/css-1-yb6dvl
# Component
Ký tự đầu tiên viết hoa : function Text(){} , bất cứ func nào cũng làm func component được , cho dù nó là method của 1 obj

- Syntax
- khai báo https://codesandbox.io/s/syntax-props-51gbtk
- Ex create component đa năng  https://codesandbox.io/s/trusting-lena-w0yxlq
- Props trong JSX
  - "<" YourComponent
      propName1="String literals"
      propName2={expression} />
  - Props default is "True"
  - Spread/Rest props   https://codesandbox.io/s/spread-rest-props-ddx0se?file=/src/App.js
  - Children prop
  - "<" YourComponent>String literals <YourComponent"/>"
  - "<" YourComponent>{expression} <YourComponent "/>" https://codesandbox.io/s/children-render-props-02-5yl398
  - render props https://codesandbox.io/s/children-render-props-01-jznrtz

