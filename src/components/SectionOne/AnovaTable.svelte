<script>
    export let data

    let parameters;
    


    if(data.length == 0){
        if(localStorage.getItem("localData" ) !== null ){
            let treatmentprop = JSON.parse(localStorage.getItem("localData")) 
            parameters = [...treatmentprop.map(item=>{return item.treatmentData})]       
        }else{
            let dta = [[0,0,0,0]]
            parameters = [...dta]
        }

    }    
    
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
 


</script>
<section>
    <div class="sect">
        <table>
            <thead>
                
                <tr>
                    <th>
                        <p>SOURCE OF VARIATION</p>
                    </th>
                    <th>
                        <p>SUM OF SQUARES</p>
                    </th>
                    <th>
                        <p>DEGREES OF FREEDOM</p>
                    </th>
                    <th>
                        <p>MEAN SQUARES</p>
                    </th>
                    <th>
                        <p>CALCULATED F VALUE</p>
                    </th>
                </tr>
            </thead>
            {#each data as  fact}
            <tbody>
                <tr>
                    <td class="column-1">TREATMENT</td>
                    <td class="row">{fact.sumOfSquares.treatmentSumOfSquares}</td>
                    <td class="row">{fact.degreesOfFreedom.treatmentDegreesOfFreedom}</td>
                    <td class="row">{fact.meanSquares.treatmentMeanSquare}</td>
                    <td class="row">{fact.fvalue.calculatedFValue}</td>
                </tr>
                <tr>
                    <td class="column-1">ERROR</td>
                    <td class="row">{fact.sumOfSquares.errorSumOfSquares}</td>
                    <td class="row">{fact.degreesOfFreedom.errorDegreesOfFreedom}</td>
                    <td class="row">{fact.meanSquares.errorMeanSquares}</td>
                    
                </tr>
                <tr>
                    <td class="column-1">TOTAL</td>
                    <td class="row">{fact.sumOfSquares.totalSumOfSquares}</td>
                    <td class="row">{fact.degreesOfFreedom.totalDegreesOfFreedom}</td>
                    
                </tr>
            </tbody>
            {/each}
        </table>
    </div>
</section>
<style lang="scss">
    @mixin font($c, $s, $w) {
        font-family:Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
        color:$c;
        font-size: $s;
        font-weight:$w;

    }

    section{
        .sect{ 
            background: rgba(0, 0, 0, 0.09);
            padding: 15px;
            table{
                border-spacing:  5px 10px;
                width: 100%;
                thead{

                    background: rgba(0, 0, 0, 0.103);

                    tr{
                        th{
                            p{
                                @include font(var(--dtc), 14px, 500);
                                margin: 0;
                                padding:15px;
                            }
                        }
                    }
                }
                tbody{
                    tr{
                        td{
                            padding: 15px;
                        }
                        .column-1{
                            @include font(var(--dtc), 14px, 500);
                            text-align: end;
                            border-right: 1.1px solid var(--gc);
                            background: var(--lgc);
                        }
                        .row{
                            @include font(var(--dtc), 12.8px, 700);
                            text-align: center;
                            background: var(--lbc);
                        }
                    }
                }
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

</style>