<script>
    /* anova table to 3 decimal places*/
    /* link links in menu*/
    /* anova website*/


    import SectionOne from "../components/SectionOne.svelte";
    import SectionTwo from "../components/SectionTwo.svelte";
    import SectionThree from "../components/SectionThree.svelte";
    import SectionFour from "../components/SectionFour.svelte";

    
    $: treatmentprop = [ ];
    $: data = []

    
    
    function addTreatment(e){
        const event = e.detail
        treatmentprop = [...event];
        let parameters = [...treatmentprop.map(item=>{return item.treatmentData})]
       




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
<main>
    <div class="man">

        <div class="title">
            <h1>ANOVA TABLE</h1>
        </div>
        <div class="sect-1-components">
            <SectionOne 
            treatmentprop={treatmentprop} 
            data={data}
            />
        </div>

        <div class="sect-2-3-4-components">
            <div class="s234">
                <SectionTwo />
                <div class="s3">
                    <div class="title">
                        <h1>ANOVA DATA</h1>
                    </div>
                    <SectionThree on:addtreatment={addTreatment} />
                </div>
                <SectionFour />
            </div>
        </div>

    </div>
</main>

<style lang="scss">
    	@mixin font($c, $s, $w) {
        font-family:Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
        color:$c;
        font-size: $s;
        font-weight:$w;

    }
    main{
        .man{
            padding: 0 45px;
            padding-top: 10vh;
            padding-bottom: 10vh;
            margin: auto;
            position: relative;
            .title{
                text-align: end;
                h1{
                    margin: 0;
                    padding: 10px 0px;
                    @include font(var(--dtc), 15px, 520);
                }
            }

            .sect-2-3-4-components{
                background: white;
                border-top: 1px solid var(--gc);
                margin-top: 5px;  
                padding-top: 20px;            
                z-index: 7;
               
            }
        }
    }

</style>