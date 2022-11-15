<script>
    import AnovaTable from "../components/SectionOne/AnovaTable.svelte";

    export let treatmentprop;
    export let data;


    if(treatmentprop.length == 0){
        if(localStorage.getItem("localData" ) !== null ){
            treatmentprop = JSON.parse(localStorage.getItem("localData"))        
        }

    }
    function deleteTreatment(id){
        const fill = treatmentprop.filter(item=>{return item.id != id })
        treatmentprop = [...fill]
        let parameters = [...treatmentprop.map(item=>{return item.treatmentData})]
        localStorage.setItem("localData", JSON.stringify(treatmentprop))



        class Factors{
        constructor (gt, cf, ts, st, se, df, tdf, edf, mt, me, cfv, Nf, kf, nf, af) {
            this.date = Factors.date();
            this.id = Factors.uuid();
            this.grandTotal = gt;
            this.correctionFactor = cf;
            this.sumOfSquares = {
                totalSumOfSquares: ts,
                treatmentSumOfSquares: st,
                errorSumOfSquares: se,
            };
            this.degreesOfFreedom = {
                totalDegreesOfFreedom: df,
                treatmentDegreesOfFreedom: tdf,
                errorDegreesOfFreedom: edf,
            }; 
            this.meanSquares = {
                treatmentMeanSquare: mt,
                errorMeanSquares: me,
            };
            this.fvalue = {
                calculatedFValue: cfv,
            }
            this.variables = {
                N : Nf,
                k : kf,
                n : nf,
                a : af

            }

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

    const a = 0.005

    const k = parameters.length;

    const N = parameters.reduce((a,b)=>{
        return a + b.length
    },0)

    const n = parameters.reduce((a,b)=>{
        return a + "," + b.length
    },"")

    const treatmentTotals = parameters.map((element)=>{
    
        const reducedTotal = element.reduce((a,b)=>{
            return a + b
        },0)
        return reducedTotal
    })

    const grandTotal = treatmentTotals.reduce((a,b)=>{
        return a + b
    },0)

    const correctionFactor = (a,b)=>{
        return (a**2)/b
    }

    const CF = correctionFactor(grandTotal,N)




    /*
    combine properties with methods in a class 23:40

    */
    class Statistics{
        constructor(param){
            this.parameterArray = param;
            this.treatmentSumArray = [];
            this.numberOfTreatments = [];
            this.TreatmentSumOfSqaures= [];
            this.sumOfSquares = [];
            this.squaredArray = [];

        }  

    

        squareSumArithimetic(){
            let sumSquare = 0
            let sst = 0
            
            
            this.parameterArray.forEach((element)=>{ 
                let sm = 0           
                element.forEach((item)=>{ 
                    //sum 
                    sm = sm + item
                    //sqaure  
                    this.squaredArray.push(item**2)
                    sumSquare = sumSquare + item**2
                    //display unit and unit square
                // console.log(`${item} = ${item**2}`)            
                })
                let st = (sm**2)/element.length
                sst = st + sst
                this.numberOfTreatments.push(element.length)
                this.treatmentSumArray.push(sm)
                
                
                
            })
            
            this.TreatmentSumOfSqaures.push(sst)
            this.sumOfSquares.push(sumSquare)
        }

    }

    const statistics = new Statistics(parameters)
    statistics.squareSumArithimetic()

    //sum of sqaures 
    const TSS = statistics.sumOfSquares[0] - CF
    const SST = statistics.TreatmentSumOfSqaures[0] - CF
    const SSE = (TSS-SST)
    //degrees of freedom
    const totalDF = (N-1)
    const treatmentDF = (k-1)
    const errorDF = (N-k) 
    //mean squares
    const treatmentMS = (SST/treatmentDF)
    const errorMS = (SSE/errorDF)
    //f-value
    const calculatedFV = (treatmentMS/errorMS)


    const factor = [ new Factors(
        grandTotal,
        CF,
        TSS,
        SST,
        SSE,
        totalDF,
        treatmentDF,
        errorDF,
        treatmentMS,
        errorMS,
        calculatedFV,
        N,
        k,
        n,
        a
    )];

    data = [...factor]
        
        

    }    


    
</script>


<article>
    <div class="art">
        {#if treatmentprop.length > 0}
        <div class="trtdt">
            <section>
                <div class="sect">
            
                    <div class="title">
                        <p>TREATMENT</p>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><defs><clipPath id="a"><rect width="16" height="16" fill="none"/></clipPath></defs><g clip-path="url(#a)"><path d="M8,0a8,8,0,1,0,8,8A8.024,8.024,0,0,0,8,0ZM9.1,12.2H6.9V10.3H9.2v1.9Zm.1-7.4L8.6,9.2H7.4L6.8,4.8v-1H9.3v1Z" fill="#278deb"/></g></svg>
                    </div>
            
                    <table class="data">
                        <tbody class="dt">
            
                            {#each treatmentprop as td}
                            <tr>
                                <td class="tabledata">
                                    <h1 class="tabletitle">{td.treatmentName.toUpperCase()}</h1>
                                    <p class="tablecontent">{td.treatmentData}</p>
                                </td>
                                <td on:click={deleteTreatment(td.id)} class="delete">delete</td>
                            </tr>
                            <tr class="space">
                                <td>____</td>
                            </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
        {/if}                   

        <div class="anvtb">
            <AnovaTable {data}/>           

        </div>

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
        .art{
            display: flex;
            .trtdt{
                pointer-events: all;
                width: 25%;
                margin-right: 10px;
                section{
                    background:#278ceb0e;
                    
                    .sect{
                        height: 260px;
                        overflow: scroll;

                        .title{
                            background: var(--lbc);
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            padding: 0 5px;
                            p{
                                @include font(var(--dtc), 14px, 500);
                            }                
                        }
                        .data{
                            border: transparent solid 1px;          
                            width: 100%;
                            border-spacing: 0 6px;
                            
                        }
                    }
                    .sect::-webkit-scrollbar{
                        width: 3px;
                        height: 0 !important;
                        background: var(--lbc);
                    }
                    
                    
                }
            }
            .anvtb{
                flex: 1;
                
            }
            
            
        }
    }

        
        
    

    @media screen and (max-width: 700px){
        section{
            .sect{
                table{
                    font-size: 14px;

                    border-spacing: 0px 10px !important;
                   
                }
            }
        }
        

    }
    @media screen and (max-width: 1300px) {
        article{
            .art{
                flex-direction: column;
                .trtdt{
                    width: 100% !important;

                }
            }
        }
    }
</style>