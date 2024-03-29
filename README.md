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
      - (1) useEffect(func): Mỗi khi component re-render là nó gọi lại , Gọi callback sau ỗi khi component add elenment vào DOM.
      - (2) useEffect(func,[]): Chỉ gọi 1 lần sau khi component mounted.
      - (3) useEffect(func,[dependencies]): func sẻ được gọi lại mỗi khi dependencies thay đôi.
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
    - Syntax :
    - useEffect(effectFunction, arrayDependencies):
      - useLayoutEffect(func).
      - useLayoutEffect(func,[]).
      - useLayoutEffect(func,[dependencies]).
  - Life cycle:
    - Bạn sẽ gây ra 1 event (thay đổi state/props, re-render từ component cha,...).
    - Render component.
    - Chạy useLayoutEffect, và react sẽ đợi đến khi nào nó hoàn thành.  
    - Màn hình UI được cập nhật.
  - Example :
    - https://codesandbox.io/s/zealous-saha-wbsqim
# useRef
  - là một React Hook cho phép bạn tham chiếu một giá trị không cần thiết để hiển thị và trả về một tham chiếu (còn gọi là ref ). Một tham chiếu là một đối tượng có thuộc tính đặc biệt current.
  - Syntax :
    - const ref = useRef(initialValue)
  - Chú ý : 
    - useReftrả về một đối tượng ref với một current thuộc tính ban đầu được đặt thành giá trị ban đầu mà bạn đã cung cấp.
    - (2) Cập nhật tham chiếu không kích hoạt kết xuất lại thành phần .
    - (3) Giá trị của tham chiếu được duy trì (không thay đổi) giữa các lần hiển thị lại thành phần;
    - (4) Thao tác DOM với một ref.
    - Theo mặc định, các thành phần của riêng ,bạn không thể tham chiếu tới các DOM element bên trong chúng , muốn làm dc nhưu vậy phải dùng forwardRef().
  - Example :
    - (4)https://codesandbox.io/s/getallnodelist-3ecuve
    - (4)https://codesandbox.io/s/domwithref-445xvu
    - (4)https://codesandbox.io/s/musing-hypatia-zqhnxn
    - (2)(3)https://codesandbox.io/s/charming-hypatia-xwojf6
# forwardRef
- khi khi bạn tham chiếu tới 1 DOM element thông qua 1 component thì dùng đén nó .
- Bạn có thể ứng dụng nó global component.
- https://legacy.reactjs.org/docs/forwarding-refs.html
- https://react.dev/reference/react/forwardRef
# memo in react
  - Bỏ qua việc re-render 1 component nếu nội dung component không thay đổi.
  - memo sử dụng toán tử === để so sánh
  - Example :
    - https://codesandbox.io/s/cranky-oskar-l3lmnl
    - https://codesandbox.io/s/adoring-jerry-nkcjyy

# useCallback
  -  Là một react hooks giúp mình tạo ra một memoized callback và chỉ tạo ra callback mới khi dependencies thay đổi.
  - Syntax :
    - const cachedValue = useCallback(calculateValue, [dependencies]);
  - Life cycle:
    - Nhận vào 2 tham số: 1 là function, 2 là dependencies.  
    - Return memoized callback.
    - Chỉ tạo ra function mới khi dependencies thay đổi.
    - Nếu dùng empty dependencies thì không bao giờ tạo ra function mới.
  - Chú ý : 
    - Sử dụng React(memo) cho component con thì sử dụng useCallback , còn k sử dụng React(memo) thì không cần sử dụng useCallBack
    - Quy ước đặt tên: hàm trực tiếp xử lý bắt đầu handler , chờ 1 cái hành động xảy ra đặt là on.
  - Example:
    - https://codesandbox.io/s/pedantic-water-8q55cu
# useMemo
  - là một React Hook cho phép bạn lưu trữ kết quả tính toán giữa các lần kết xuất lại /  Là một react hooks giúp mình tạo ra một memoized value và chỉ tính toán ra value mới khi dependencies thay đổi.
    - useMemo() hạn chế 1 tác vụ re-render không cần thiết -> trả về 1 kq
    - Tính chất giống như useEffect và useCallBack , chỉ trả về giá trị 1 lần
  - Syntax :
    - const cachedValue = useMemo(calculateValue, [dependencies]);
  - Life cycle:
    - Nhận vào 2 tham số: 1 là function, 2 là dependencies.  
    - Return memoized callback.
    - Chỉ tính toán value mới khi dependencies thay đổi.
    - Nếu dùng empty dependencies thì không bao giờ tạo ra function mới.  
  - Chú ý :
    - useMemo sẽ không làm cho kết xuất đầu tiên nhanh hơn. Nó chỉ giúp bạn bỏ qua những công việc không cần thiết trên các bản cập nhật.
  - Example:
    - https://codesandbox.io/s/usemome-01-fyc007
# useContent
  - Cho phép bạn truyền dữ kiệu hay tham chiếu đến bất cứ nơi nào thuộc thành phần con của nó.
    - CompA => CompB => CompC => CompD
    - 1.Create content
    - 2.Provider
    - 3.Consumer
  - Example:
    - https://codesandbox.io/s/winter-cherry-cu0v24 / https://codesandbox.io/s/quizzica-cautruc-files-125yo1
# useImperativeHandle
  - là một React Hook cho phép bạn tùy chỉnh tay cầm được hiển thị dưới dạng tham chiếu.
  - Syntax :
    - useImperativeHandle(ref, createHandle, dependencies?)
  - Example:
    - https://codesandbox.io/s/stupefied-scott-x7xzpl
    - https://codesandbox.io/s/cocky-buck-kevy7t?file=/src/App.js
# localstorge and sessionstorge
# useEx
  - Text
  - Syntax :
    - aaaaaa
  - Chú ý : 
    - cccc
  - Example:
    - ccc
# Router in react 
  - private route
  - https://codesandbox.io/s/router-zg5ke4
# CSS in react 
  - Syntax , Module.css , sass , clsx
  - CSS folder structure / directory structure , create css global.
  - https://codesandbox.io/s/css-1-yb6dvl
# setting bootrap in react
# how to customer a hook
# pagi
# Render Props
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

