const gameContanier = document.querySelector(".container");
userResult = document.querySelector(".user-img img");
cpuResult = document.querySelector(".cpu-img img ");
result = document.querySelector(".result");
optionImage = document.querySelectorAll(".option-image");
// console.log(gameContanier,userResult,cpuResult,result,optionImage);

optionImage.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");
        optionImage.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
            userResult.src = cpuResult.src = "images/rock.jpg";
            result.textContent="Wait....."


        });
        gameContanier.classList.add("start")

        let time = setTimeout(() => {

            gameContanier.classList.remove("start")

            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;

            let randomNumber = Math.floor(Math.random() * 3);
            let cpuImages = ["images/rock.jpg", "images/papper.jpg", "images/scissor.jpg"];
            cpuResult.src = cpuImages[randomNumber];

            let cpuValue = ['R', 'P', 'S'][randomNumber];
            let userValue = ['R', 'P', 'S'][index];

            let outcomes = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Cpu",
                SS: "Draw",
                SR: "Cpu",
                SP: "User",
            };

            let outComeValue = outcomes[userValue + cpuValue];
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!`;
        }, 1500)

    });

});