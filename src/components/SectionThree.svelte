<script>
    
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    $: dataInput = "";
    $: treatmentInput = "";
    $: errror = false;

    $: splitData = dataInput.split(" ");  

   

    class dataObj{
        constructor(trt, numdt) {
            this.id= `${dataObj.uuid()}-${dataObj.uuid()}`;
            this.date = dataObj.date();
            this.treatmentName = trt;
            this.treatmentData = numdt;
        }
        static date() {             
        return new Date().toLocaleDateString()
        }
        static idOne() {

            const str = 'abcdefghijklm';
            const num = Math.floor(Math.random() * 13);
            const strNum = num - 1

            const subStr = str.substring(strNum, num);
            const idNum = Math.floor(Math.random() * 9);

            return `${subStr}${idNum}`

        };
        static idTwo() {

            const str = 'nopqrstuvwxyz';
            const num = Math.floor(Math.random() * 13);
            const strNum = num - 1

            const subStr = str.substring(strNum, num);
            const idNum = Math.floor(Math.random() * 9);

            return `${subStr}${idNum}`

        };
        static uuid() {
            const idOne = this.idOne();
            const idTwo = this.idTwo();

            const id  = `${idOne}${idTwo}`;



            if (id.length == 3) {

                const num = `${Math.floor(Math.random() * 9)}`;

                const idMod = id + num ;

                return idMod;

            }else if(id.length == 2){

                const numM1 = `${Math.floor(Math.random() * 9)}`;
                const numM2 = `${Math.floor(Math.random() * 9)}`;

                const idMod2 = id + numM1 + numM2 ;

                return idMod2;

                
            }else{
                return id;
            };
        };
            
    }

    function enterTreatment(){

        if(treatmentInput == ""){
            errror = true
            setTimeout(() => {
                errror = false
            }, 8000);
        }
        if(treatmentInput !== ""){
            let filterData = splitData.filter(item=>{return item != ''}).map(element=>{return Number(element)}).map(item=>{return item.toString()}).filter(element=>{return element != "NaN"}).map(item=>{return Number(item)});
            
            let localData;
            
            if(localStorage.getItem("localData") === null) {
                localData = []
                localData.push(new dataObj(treatmentInput, filterData))
                localStorage.setItem("localData", JSON.stringify(localData))
            }else{
                localData = JSON.parse(localStorage.getItem("localData"))
                localData.push(new dataObj(treatmentInput, filterData))
                localStorage.setItem("localData", JSON.stringify(localData))
            }
           
            console.log(`${filterData} pushed`);
            //console.log(localData);

            dispatch("addtreatment", localData)
            treatmentInput = "";   
            dataInput = "";   


        }
        
    } 

       

    
    
    
</script>
<article>
    <div class="art">
        <div  class="screen">
            {#if errror == true}
            <p class:error={errror} >TREATMENT FIELD CANNOT BE EMPTY</p>
            {/if}
            {#if errror == false}
            <p class="split">{dataInput.split(" ")}</p>
            {/if}
        </div>
        
        <form  class="form">
            <div class="section-1">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label >TREATMENT</label>
            
                <input bind:value={treatmentInput} type="text" name="text" class="text" placeholder="ENTER TREATMENT NAME">
            </div>
            <div class="section-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label >DATA</label>
                <input bind:value={dataInput} type="text" name="text" class="data" placeholder="ENTER TREATMENT DATA">
            </div>
            
            <div class="section-3">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label>ENTER DATA</label>
                <p on:click={enterTreatment}>
                    <span>
                        SUBMIT
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="7.1" height="10.4" viewBox="0 0 7.1 10.4"><defs><clipPath id="a"><rect width="7.1" height="10.4" fill="none"/></clipPath></defs><g clip-path="url(#a)"><path d="M5.2,7.1,0,1.63,1.549,0,5.2,3.841,8.851,0,10.4,1.63Z" transform="translate(0 10.4) rotate(-90)" fill="#fff"/></g></svg>
                    </span>
                </p>

            </div>
        </form>
    </div>
</article>
<style lang="scss">
            	@mixin font($c, $s, $w) {
        font-family:Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
        color:$c;
        font-size: $s;
        font-weight:$w;

    }
    article{
        background: var(--lbc);
        padding:10px;
        .art{
            padding: 10px 0px;
            .screen{
                height: 30px;
                width: 100%;
                box-shadow: rgba(0, 0, 0, 0.357) 2px 4px;
                background: var(--lbc) ;                
                margin: 10px 0px;
                .split{

                    @include font(black, 15px, 700);
                    letter-spacing: 3px;
                    padding: 10px;
                }
                .error{
                    
                    @include font(black, 15px, 700);
                    letter-spacing: 1px;
                    text-align: center;
                    background: rgba(255, 0, 0, 0.227);
                    border-left: red solid 2px;
                    width: 100%;
                    padding: 10px 0px;
                }
            }
            form{
                display: flex;
                align-items: center;
                div{
                    flex:1;
                    border-left: var(--bc) solid 1.5px;
                    padding: 10px;
                    margin: 0 5px;
                    label{
                        display: block;
                        @include font(var(--dtc), 14px, 500);
                        margin: 3px 0px;
                    }
                    p{
                        background: var(--dbc);
                        padding: 15px ;
                        color: var(--wtc);
                        
                        cursor: pointer;
                    }
                    input{
                        border: none;
                        background: none;
                        border: black solid 0.9px;
                        background: rgba(255, 255, 255, 0.37);
                        padding: 15px 7px;
                        padding-right: 0;
                        width: 100%;
                        

                    }
                    input::placeholder{
                        @include font(rgba(0, 0, 0, 0.467), 12px, 500)


                    }
                }

            }
        }
    }
    @media screen and (max-width: 1300px){
        form{
            flex-direction: column;
            padding: 0 20px;
            div{
                width: 100%;
                padding: 0 10px;
            }
            
            input{

                width: 100% !important;
            }
        }
    }
</style>