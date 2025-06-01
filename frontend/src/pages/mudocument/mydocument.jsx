
import styles from "./mydocument.module.css";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaUser } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import { MdDriveEta } from "react-icons/md";

export function Documents() {




     const [document, setdocument] = useState([]); 
  const [inputValue, setInputValue] = useState(""); 

//   const handleAddItem = () => {
//     if (inputValue.trim() === "") return;
//     setItems([...items, inputValue]);
//     setInputValue("");
//   };
  return (
   
    <>
<Card className={`${styles.docment_container} mt-6`} dir="rtl">  
       <Card.Body>
      <Card.Title>
        <FaUser style={{ marginLeft: '8px' }} /> رقم الوثيقة:
        </Card.Title>
   <Card.Text>
  <BiCalendar style={{ marginLeft: "8px", color: "black" }} />
  تاريخ الإصدار:
</Card.Text>
 <Card.Text>
  <BiCalendar style={{ marginLeft: "8px", color: "black" }} />
  تاريخ الانتهاء:
</Card.Text>
<Card.Text>
  <MdDriveEta style={{ marginLeft: '8px', color: 'black' }} />
  الوجهة:
</Card.Text>
    <hr  className={styles.hr}/>
<Button className={styles.docment_button}>تحميل الوثيقة</Button>
  </Card.Body>

    </Card>


   <Card className={`${styles.docment_container} mt-6`} dir="rtl">  
       <Card.Body>
      <Card.Title>
        <FaUser style={{ marginLeft: '8px' }} /> رقم الوثيقة:
        </Card.Title>
   <Card.Text>
  <BiCalendar style={{ marginLeft: "8px", color: "black" }} />
  تاريخ الإصدار:
</Card.Text>
 <Card.Text>
  <BiCalendar style={{ marginLeft: "8px", color: "black" }} />
  تاريخ الانتهاء:
</Card.Text>


<Card.Text>
  <MdDriveEta style={{ marginLeft: '8px', color: 'black' }} />
  الوجهة:
</Card.Text>
  <hr  className={styles.hr}/>
<Button className={styles.docment_button}>تحميل الوثيقة</Button>
  </Card.Body>

    </Card>


    
    

    



    
    </>
  );
}