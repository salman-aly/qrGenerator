let generateQr = () => {
    let userInput = document.getElementById("qrValue").value;
    let qrimg = document.getElementById("qrImage");

    if (userInput === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please insert text/url",
        });
    } else {
        setTimeout(() => {
            let timerInterval;
            Swal.fire({
                title: "Generating QR Code!",
                html: "Time Left: <b></b> milliseconds.",
                timer: 1500,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const timer = Swal.getPopup().querySelector("b");
                    timerInterval = setInterval(() => {
                        timer.textContent = `${Swal.getTimerLeft()}`;
                    }, 100);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                }
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log("I was closed by the timer");
                }
            });
        }, 2000);

        setInterval(() => {
            qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userInput}`;
        }, 2500);
    }
}
