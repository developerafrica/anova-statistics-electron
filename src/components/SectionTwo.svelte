<article>
    <div class="art">

        <div class="notification">
            <h1>* DATA MUST BE NUMERIC</h1>
            <h1>* DATA MUST BE SEPARETED WITH A SPACE</h1>
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
            .notification{
                background: rgba(255, 0, 0, 0.07);
                border-left: red solid 2px;
                padding: 15px 5px;
                width: 25%;
                h1{
                    @include font(var(--dtc), 12px, 550);
                    margin: 5px;
                }
            }

        }
    }
</style>