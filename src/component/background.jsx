import React, {useState} from "react";
import './backgroundStyle.css'
import styled from "styled-components";
import {useEffect} from "react";

const Content = () =>{
    const [Check,setCheck] = useState(false);
    const [Count,setCount] = useState(1);
    const [None,setNone] = useState('');
    const [Block,setBlock] = useState('');
    return(
        <div className={"Content"}>
            <div className={"Button"}>
                <div onClick={Animation} style={Check === true ? translateX_right() : translateX_left()} className={"Button-Row"}>
                    <div className={"Button-Text"}>
                        <h4>&#128151;کلیک کن</h4>
                    </div>
                </div>
            </div>
            <div className={"Text"}>
                <p className={"Paragraph"}>
                    هر وقت خستم بهم انرژی میدی
                    هر وقت دلم گرفته با گفتن کلمه دوست دارم بهم روحیه میدی که نباید تسلیم بشم
                    نمیدونم قبل تو چطوری زندگی میکردم
                    و نمیدونم بدون تو هم چطوری میخوام زندگی کنم
                    اما الان اینو میدونم که هر روز با هدف بیدار میشم چون میدونم یکی هست که به فکرمه و یکی هست که برای رسیدن بهش تلاش کنم
                    هر چند مشکلات زیادی بین ما هست
                    اما میتونیم باهم از این مشکلات گذشت کنیم
                    و همچنان منتظر 31 شهریور روز به دنیا اومدن زیباترین گل هستم
                    امیدوارم شما هم همین حس رو نسبت به من داشته باشی
                    باز هم مثل همیشه در جمله آخر باید بگم با تمام این شرایط
                    دوست دارم.
                </p>
            </div>
        </div>
    );

    function Animation(){
        setCount(Count + 1);
        if(Count === 1){
            setCheck(true);
        }else if(Count === 2){
            setCheck(false);
            setCount(1);
        }
        console.log(Count,Check)
    }
    function translateX_right() {
        ShowingContent();
        return {
            transform: 'translateX(117%)',
            boxShadow: 'inset 0 0 20px 0 black, -9px 0 20px 20px black',
        };
    }
    function translateX_left() {
        return {
            transform: 'translateX(0%)',
            boxShadow: 'inset 0 0 20px 0 black, 9px 0 20px 20px black'
        };
    }
    function ShowingContent(){
        setTimeout(()=>{
            console.log("hide");
            setNone('none');
            setBlock('block');
        },300)
    }
}

export default Content;