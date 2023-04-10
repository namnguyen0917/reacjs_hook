# Hook
# useState
  - Khi trạng thái của dữ liệu thay đổi thì giao diện tự động thay đổi (render lại dữ liệu). https://react.dev/reference/react/useState
  - Khai báo :
    - const [state, setState] = useState(InitialState);
  - Chú ý : 
    - InitialState chỉ khơi tạo một lần duy nhất có thể là useState (string, array, object, func, characters, true/false);
    - Component dc re-render sau khi 'setState'
    - Set State với callbacks
    - Initial State với callbacks
    - Set state thay thế state bằng giá trị mới
  - Ex:
    - https://codesandbox.io/s/nervous-leaf-sge400?file=/src/App.js
    - Radio and checkbox https://codesandbox.io/s/radio-and-check-box-39s976
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

