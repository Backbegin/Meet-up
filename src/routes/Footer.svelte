<script>
    import phone from "$lib/images/phone.png";
    import mail from "$lib/images/mail.png";
    import telegram from "$lib/images/telegram.png";
</script>

<footer>
    <p>Any questions or suggestions? Contact us:</p>
    <div>
        <a href=" tel:+79279503435">
            <img src={phone} alt="phone" />
        </a>
        <a href="mailto:d.troegubov@innopolis.university">
            <img src={mail} alt="mail" />
        </a>
        <a href="https://t.me/BogGoro">
            <img src={telegram} alt="telegram" />
        </a>
    </div>
</footer>

<style>
	footer {
		font-size: 1.5em;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		background-color: #faecf9;
		color: #b129aa;
		padding: 0.1em;
        max-height: 70px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

    div {
        min-width: 167px;
    }

    img {
        width: 30%;
    }

    p {
        font-size: 3.2vh;
    }
</style>
