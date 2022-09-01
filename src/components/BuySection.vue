<template>
    <section id="buy">
        <v-snackbar
            v-model="snackbar"
            rounded="pill"
            color="success"
            timeout="2000"
            :absolute="true"
        >
            Token Address has been copied to clipboard!

            <template v-slot:action="{ attrs }">
                <v-btn
                    color="white"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>
        <v-container class="buy">
            <h1
                class="display-3 text-left white--text font-weight-bold h1"
                style="margin-bottom: 130px"
            >
                Get Ready to trade after Preslae is
                <span class="primary--text">finished.</span>
            </h1>

            <v-row>
                <v-col class="white--text gap-8">
                    <div class="step-1">
                        <h1 class="text-h5">Step 1</h1>
                        <h2 class="primary--text text-h5">
                            Download and setup MetaMask or TrustWallet
                        </h2>
                        <ol>
                            <li class="text-h6">
                                Download MetaMask (a crypto wallet in the form
                                of a browser extension) or TrustWallet (an app
                                for your phone).
                            </li>
                            <li class="text-h6">
                                You will have to add the Binance Smart Chain to
                                your network-list. (Click here for a
                                step-by-step tutorial).
                            </li>
                        </ol>
                    </div>
                    <div
                        class="step-2"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="200"
                    >
                        <h1 class="text-h5">Step 2</h1>
                        <h2 class="primary--text text-h5">
                            Buy and send BNB to Metamask or TrustWallet
                        </h2>
                        <p class="text-h6">
                            Buy BNB on an exchange (i.e. Binance, Kraken,
                            Coinbase etc.). Transfer the tokens to your MetaMask
                            wallet address. BEP-20 addresses start with a "0x".
                        </p>
                    </div>
                    <div
                        class="step-3"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="200"
                    >
                        <h1 class="text-h5">Step 3</h1>
                        <h2 class="primary--text text-h5">
                            Head over to our Swap to buy $CAKE
                        </h2>
                        <p class="text-h6">
                            Click here to go to our Swap. Select KittyCake or
                            use our contract address:
                            <span ref="tokenAddress"
                                >to be confirmed when presale has started</span
                            >
                            <v-btn icon @click="copyToken" color="primary"
                                ><v-icon>mdi-content-copy</v-icon></v-btn
                            >. Set the slippage tolerance to 15% (sometimes it
                            may be 18%, depending on how much demand there is).
                        </p>
                    </div>
                    <div
                        class="step-4"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="200"
                    >
                        <h1 class="text-h5">Step 4</h1>
                        <h2 class="primary--text text-h5">
                            View $KCAKE and HODL
                        </h2>
                        <p class="text-h6">
                            Swap BNB for KITTYCAKE. Now you need to add
                            KITTYCAKE contract address to your MetaMask or Trust
                            Wallet to view your $KCAKE. Lastly, HODL!
                        </p>
                    </div>
                    <div
                        class="step-5"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="200"
                    >
                        <h1 class="text-h5">Last step,</h1>
                        <h2 class="primary--text text-h5">
                            Add the Pancake Swap Token address to see your
                            rewards as they are
                        </h2>
                        <p class="text-h6">
                            Pancake Swap Token Address:
                            <span ref="tokenAddress"
                                >to be announced when presale starts</span
                            >.
                            <v-btn icon @click="copyToken" color="primary"
                                ><v-icon>mdi-content-copy</v-icon></v-btn
                            >
                        </p>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    data() {
        return {
            snackbar: false,
        };
    },
    methods: {
        copyToken() {
            let token = this.$refs.tokenAddress.innerHTML;
            // navigator.clipboard.writeText(token)
            this.snackbar = true;
        },
    },
    mounted() {

    },
};
</script>

<style scoped>
#buy {
    padding: 120px 0;
    box-shadow: 12px 4px 44px rgba(0, 0, 0, 0.05);
}
.buy {
    height: 100vh;
    width: 100%;
}
.step-1,
.step-2,
.step-3,
.step-4,
.step-5 {
    margin-bottom: 24px;
}
</style>