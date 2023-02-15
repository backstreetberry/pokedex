import styled from "styled-components";


const Wrapper = styled.div`
  position: relative;
  display:block;
  max-width: 450px;
  min-width: 180px;
  margin:0 auto;


  &::after {
    background-image: url("data:image/svg+xml;utf8,<svg width='14' height='11' viewBox='0 0 14 11' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.37823 9.75281C6.1765 10.8589 7.8235 10.8589 8.62177 9.75281L13.3722 3.17041C14.3268 1.84768 13.3817 0 11.7504 0H2.24956C0.618348 0 -0.326804 1.84768 0.627793 3.17041L5.37823 9.75281Z' fill='black' fill-opacity='0.8'/></svg>");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    display: block;
    height: 16px;
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    z-index: 1;
  }
`;

const SelectEl = styled.select`
  border: 1px solid black;
  outline:none;
  background: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 10px;
  margin:0;
  display:block;
  width: 100%;
  cursor: pointer;

  /* custom select appearance */  
  padding: 12px 55px 15px 15px;
  font-size: 20px;
`;

export default function Select(props) {
  return (
    <Wrapper>
      <SelectEl {...props}/>
    </Wrapper>
  );
}
