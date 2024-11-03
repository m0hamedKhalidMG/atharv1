import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Titr', '29LT Riwaya';  /* هنا يتم تحديد الخط الرئيسي فقط */
    direction: rtl;  /* لأن الموقع باللغة العربية */
    background-color: #f5f5f5;  /* يمكنك تغيير خلفية الموقع إذا لزم الأمر */
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Titr';  /* استخدام خط Titr للعناوين فقط */
  }

  p, span, a, div {
    font-family: '29LT Riwaya';  /* استخدام خط عربي للنصوص الأخرى */
  }
`;

export default GlobalStyle;
