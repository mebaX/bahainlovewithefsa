import { useEffect, useState } from 'react'
import * as React from 'react';
import Button from '@mui/material/Button';
import DialogPage from './dialogPage';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';





function MainPage() {


    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    const [today, setToday] = useState(0)
    const FirstDate = new Date('October 5, 2024 17:00:00').getTime()
    useEffect(() => {
        setInterval(() => {
            do { setToday(new Date().getTime()) }
            while (today != 0)
        })
    }, [])

    const elapsedTime = today - FirstDate
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);

    window.onload = function () {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>

            <h1>
                <a href="" class="typewrite" data-period="2000" data-type='[ "Selam sevgilim", "Sevgililer günün kutlu olsun.","Bu hediyeler senin için. Tadını çıkart <3"]'>
                    <span class="wrap"></span>
                </a>
            </h1>

            {/* <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                >
                    <DialogContent style={{ maxWidth: '600px', overflowWrap: 'break-word' }}>
                        <div>
                            <TextField id="outlined-basic" label="Şifre" variant="outlined" />
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Kapat</Button>
                    </DialogActions>
                </Dialog>
            </div> */}

            <div>
                <DialogPage description="Seninle ilk konuşmalarımızdan biri. Eymen Derin'in sana (Efsa Simya) söyledikleri hakkında açıklamam FDSPĞFÖSDPĞFÖSPDĞ" media="/efsaandbaha/eymenderin.jpg" />

                <DialogPage description="utangacbaha" media="/efsaandbaha/cakmakss.png" />

                <DialogPage description="Flört sürecimizin başlangıcı. Arada bir sana seni sevdiğimi hatırlatırdım ve ilk defa geri bildirim almıştım." media="/efsaandbaha/seniseviyorum.jpg" />

                <DialogPage description="Bugün 5 Ekim 2024. First date'imiz. Korku evi yapalım diyip Ravza'yla buluşmuştuk ama girememiştik. " media="/efsaandbaha/5 ekim starbucks.mp4" />

                <DialogPage description="First date'imizde Starbucks'ta baş başa kalınca sana ilişkimizin adını koymak istediğimi söylemiştim. Ve o anda biz resmen sevgiliydik.  " media="/efsaandbaha/first date.jpg" />

                <DialogPage description="Çıkma teklifimi kabul ettikten sonra beni restoranda partiye çağırmıştın. Ben de hiç düşünmeden evet demiştim. Ve Göreme otobüsüne binmiştik." media="/efsaandbaha/5 ekim otobus.mp4" />

                <DialogPage description="baba gonderme 🤯" media="/efsaandbaha/5 ekim banu.mp4" />

                <DialogPage description="Restorana vardık. Annen ve babanla tanıştım. Baban beni kolumu kırmakla tehdit etti 😔" media="/efsaandbaha/5 ekim restoran.mp4" />

                <DialogPage description="Pembe mezarlık dinlerken Elifle konuşmuştuk ABHBASDHJBDASHJBJHDSA" media="/efsaandbaha/5 ekim pembe mezarlik.mp4" />

                <DialogPage description="Abibucocukasik" media="/efsaandbaha/bucocukasik.mp4" />

                <DialogPage description="Ayaküstü'nde sizin sınıf gezisine gelmiştim." media="/efsaandbaha/ayakustu.jpg" />

                <DialogPage description="Beraber yemek yapıp yemiştik." media="/efsaandbaha/yemek.jpg" />

                <DialogPage description="Sen beni yemiştin (namnam)" media="/efsaandbaha/namnam.jpg" />

                <DialogPage description="Bebeğim sen lvbel c5 değilsin!" media="/efsaandbaha/lvbelc5.mp4" />



            </div>

            <div>
                <p>
                    Seninle sevgili olmamızın üzerinden <b>{days} gün {hours} saat {minutes} dakika {seconds} saniye </b>geçti. Bu süre zarfında birçok şey yaşadık. Yaşadığımız hiçbir anı unutmuyorum, unutamam. Tüm yaşadıklarımız benim için çok kıymetli. İyi ki varsın. Seni seviyorum. Birlikte nice yıllara.
                </p>
            </div>
        </>
    )
}

export default MainPage