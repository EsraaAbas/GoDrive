import styled from 'styled-components';

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;
  .form-title {
    margin-bottom: 2rem;
  }
  .form {
   direction: rtl;
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }

  .para {
    display: flex;
    align-items: center;
    gap: 8px;
  }
    

  .form-div{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    }

  .form-row {
    margin-bottom: 0;
  }
  .form-center {
     margin:32px 0 0;
     border-top: 1px solid #e5e5e5;
    display: grid;
    row-gap: 1rem;
  }
  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
  }
  .bttn {
    width: 15%;
    height: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // background-color: var(--primary-500);
    // color: white;
    padding: 1rem;
    top: 0;
    border:none;
  }
  .bttn:hover {
    background-color: var(--primary-600);
  }
    .padge {
  background-color: #fda929 ;
  color: #fff;
  border-radius: 50%;
  padding: 8px 10px;
  font-size: 0.75rem;
  font-weight: bold;
  min-width: 24px;
  text-align: center;
}

  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Wrapper;
