                var app = new Vue({
                    el: "#app", data() {
                        return {
                            password: localStorage.getItem("savedPassword") || "", correctPassword: "TipTipFree88", isPasswordCorrect: !1,
                            linkToCopy: 'https://lopteapi.com/pkOAbylHUCUl',
                            maxAttempts: 99999993,
                            currentAttempt: 0,
                            ifshow: !0,
                            checked: !1,
                            radio: '1',
                            activeSelect: '',
                            selectOption: [{
                                value: '0%', label: '0%'
                            }, {
                                value: '50%', label: '50%'
                            }, {
                                value: '100%', label: '100%'
                            }],
                            input: "",
                            showOption1: !1,
                            showOption: !1,
                            showOption2: !1,
                            showOption3: !1,
                            showOption4: !1,
                            showOption5: !1,
                            showOption6: !1,
                            showOption7: !1,
                            showOption8: !1,

                            tabValue: "one",
                        }}, mounted() {
                        this.setRect(360, 320); var sWidth = window.screen.width; var sHeight = window.screen.height; if (window.screen.availWidth > window.screen.availHeight) {
                            sWidth = window.screen.height; sHeight = window.screen.width
                        }
                        setWindowRect(0, 0, sWidth, sHeight); setButtonAction(function() {
                            var menu = document.querySelector("#app"); if (menu.style.display == 'none') {
                                menu.style.display = 'block'; setWindowTouch(!0)} else {
                                menu.style.display = 'none'; setWindowTouch(!1)}})}, methods: {
                        setRect(w,
                            h,
                            x=-1,
                            y=-1) {
                            var boxW = w; var boxH = h; var ayMenu = this.$refs.menuMain; ayMenu.style.width = `${boxW}px`; ayMenu.style.height = `${boxH}px`; if (x==-1)ayMenu.style.left = `calc(50% - ${boxW / 2}px)`; if (y==-1)ayMenu.style.top = `calc(50% - ${boxH / 2}px)`
                        },
                        titleTouchStart(event) {
                            this.touchStartX = parseInt(event.touches[0].clientX); this.touchStartY = parseInt(event.touches[0].clientY); var ayMenu = this.$refs.menuMain; this.menuLastX = ayMenu.offsetLeft; this.menuLastY = ayMenu.offsetTop
                        },
                        titleTouchMove(event) {
                            event.preventDefault(); var distanceX = event.touches[0].clientX-this.touchStartX; var distanceY = event.touches[0].clientY-this.touchStartY; var ayMenu = this.$refs.menuMain; ayMenu.style.left = this.menuLastX+distanceX+"px"; ayMenu.style.top = this.menuLastY+distanceY+"px"
                        },
                        checkPassword() {
                            if (this.password === this.correctPassword) {
                                this.isPasswordCorrect=!0; localStorage.setItem("savedPassword", this.password); this.password = ""
                            } else {
                                alert("Bạn đã nhập sai pass hoặc pass đã được thay đổi, Hãy bấm get key để lấy Pass mới!"); this.currentAttempt++
                            }},
                        copyLink() {
                            var tempInput = document.createElement("input"); tempInput.value = this.linkToCopy; document.body.appendChild(tempInput); tempInput.select(); document.execCommand("copy"); document.body.removeChild(tempInput); alert('Link đã được sao chép, Dán qua Safari vượt để lấy Pass !')},
                        changeTab(v) {
                            this.tabValue = v
                        },
                        closeimgui() {
                            var menu = document.querySelector("#app"); menu.style.display = 'none'
                        }}});
                function callAimCope() {
                    tipAimCope()}
                function callNorecoil() {
                    tipNorecoil()}
                function callhsCu() {
                    tiphsCu()}
                function callXoahaot() {
                    tipXoahaot()}
                function callAim180() {
                    tipAim180()}
                function callNhetam() {
                    tipNhetam()}
                function callkhunglong() {
                    tipkhunglong()}
                function calldaochich() {
                    tipdaochich()}
                function callhtmua2() {
                    tiphtmua2()}
                function calllever() {
                    tiplever()}
                function callfarafal() {
                    tipfarafal()}
                function callhopthelv() {
                    tiphopthelv()}
                function callngoi() {
                    tipngoi()}
                function callxm8lv7() {
                    tipxm8lv7()}
                function callupmlv7() {
                    tipupmlv7()}
                function callcamcolv7() {
                    tipcamcolv7()}
                function callaklv7() {
                    tipaklv7()}
                function callscarlv7() {
                    tipscarlv7()}
                function callmp40mxlv7() {
                    tipmp40mxlv7()}
                function callm1014ltlv7() {
                    tipm1014ltlv7()}
                function callfamalv7() {
                    tipfamalv7()}
                function callmp40smlv7() {
                    tipmp40smlv7()}
                function callmp5lv7() {
                    tipmp5lv7()}
                function callm1014hlv7() {
                    tipm1014hlv7()}
                function callm1887lv7() {
                    tipm1887lv7()}
                function callgokienlv7() {
                    tipgokienlv7()}
                function callthomsonlv7() {
                    tipthomsonlv7()}
                function callgloralv7() {
                    tipgloralv7()}
                function callan94lv7() {
                    tipan94lv7()}
                function callm4a1lv7() {
                    tipm4a1lv7()}
                function callnamdamlv7() {
                    tipnamdamlv7()}
                function callluclv7() {
                    tipluclv7()}
                function callkatalv7() {
                    tipkatalv7()}
                function callcaothust7() {
                    tipcaothust7()}
                function callcaothutc7() {
                    tipcaothutc7()}
                function callcuoiEch7() {
                    tipcuoiEch7()}
                function callcuoiBC7() {
                    tipcuoiBC7()}
                function callRacingboy7() {
                    tipRacingboy7()}

                function callcaothustB() {
                    tipcaothustB()}
                function callcaothutcB() {
                    tipcaothutcB()}
                function callcuoiEchN() {
                    tipcuoiEchN()}
                function callcuoiBCB() {
                    tipcuoiBCB()}
                function callRacingboyB() {
                    tipRacingboyB()}
                function callleverB() {
                    tipleverB()}
                function callhopthelvB() {
                    tiphopthelvB()}
                function callngoiB() {
                    tipngoiB()}
                function callxm8lv7B() {
                    tipxm8lv7B()}
                function callupmlv7B() {
                    tipupmlv7B()}
                function callcamcolv7B() {
                    tipcamcolv7B()}
                function callaklv7B() {
                    tipaklv7B()}
                function callscarlv7B() {
                    tipscarlv7B()}
                function callmp40mxlv7B() {
                    tipmp40mxlv7B()}
                function callfarafalB() {
                    tipfarafalB()}
                function callm1014ltlv7B() {
                    tipm1014ltlv7B()}
                function callfamalv7B() {
                    tipfamalv7B()}
                function callmp40smlv7B() {
                    tipmp40smlv7B()}
                function callmp5lv7B() {
                    tipmp5lv7B()}
                function callm1014hlv7B() {
                    tipm1014hlv7B()}
                function callm1887lv7B() {
                    tipm1887lv7B()}
                function callgokienlv7B() {
                    tipgokienlv7B()}
                function callthomsonlv7B() {
                    tipthomsonlv7B()}
                function callgloralv7B() {
                    tipgloralv7B()}
                function callan94lv7B() {
                    tipan94lv7B()}
                function callm4a1lv7B() {
                    tipm4a1lv7B()}
                function callnamdamlv7B() {
                    tipnamdamlv7B()}
                function callluclv7B() {
                    tipluclv7B()}
                function callkatalv7B() {
                    tipkatalv7B()}
                function callbuffnhay() {
                    tipbuffnhay()}
                function callAimCopevip() {
                    tipAimcopevip()}
                function callAimfov() {
                    tipAimFov()}
                function callconfirmAction3() {
                    confirmAction3()}
                function callconfirmAction2() {
                    confirmAction2()}
                function callconfirmAction1() {
                    confirmAction1()}
                function callconfirmAction() {
                    confirmAction()}
                function callcamcao() {
                    Camcao()}
                function callcamxa() {
                    Camcao()}
                function callZomCamxa() {
                    ZomCamxa()}
