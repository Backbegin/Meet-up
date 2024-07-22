<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-col">
	<h1 style="margin-top: 5%;">About this app</h1>
	<p class="about-intro">
		Meet up is a user-friendly platform designed to help you explore upcoming events, manage your
		own activities, and connect with others in your community.
	</p>

	<hr />
	<div class="about-info">
		<h2>Take Charge of Your Schedule:</h2>
		<div class="about-app">
			<div class="about-app-item">
				<h2>Create Events</h2>
				<p>
					Planning your own event? Share it with the community! Our user-friendly interface allows
					you to easily create event listings, complete with details like date, time, location, and
					a captivating description.
				</p>
			</div>
			<div class="about-app-item">
				<h2>Manage Your Events</h2>
				<p>
					Keep your events organized and up-to-date. Edit existing events, add photos, or update any
					information as needed.
				</p>
			</div>
			<div class="about-app-item">
				<h2>Sign Up for Events</h2>
				<p>
					Found something interesting? With a few clicks, you can register for any event that sparks
					your curiosity. Stay informed about event updates and connect with other attendees.
				</p>
			</div>
		</div>
	</div>
	<hr />
	<!--	<p>Here's what you can expect:</p>-->
	<!--	<ul>-->
	<!--		<li>-->
	<!--			Home: Our central hub provides a clear and concise overview of what's happening. You might-->
	<!--			find featured events, popular categories, or upcoming activities based on your interests.-->
	<!--		</li>-->
	<!--		<li>-->
	<!--			About Us: Get to know us better! This page delves into the purpose of Meet up, our mission,-->
	<!--			and the team behind it. You can also learn more about how the platform works and its benefits.-->
	<!--		</li>-->
	<!--		<li>-->
	<!--			Events: This is the heart of the action! Discover a wide range of events happening around you.-->
	<!--			You can browse by category, date, or search for specific keywords. Whether you're interested-->
	<!--			in workshops, concerts, social gatherings, or volunteer opportunities, there's something for-->
	<!--			everyone.-->
	<!--		</li>-->
	<!--	</ul>-->

	<h2>Join the Community:</h2>
	<p class="about-intro">
		Meet up is more than just a calendar – it's a platform for fostering connections. Sign up for a
		free account to unlock the full potential of the site.
	</p>
	<p class="about-intro">
		We look forward to welcoming you and helping you navigate the exciting world of events happening
		in your community!
	</p>
</div>

<style>
	.about-intro {
		font-size: 1.5em;
		text-indent: 3%;
		max-width: 60rem;
		text-align: center;
		margin: 3% auto 5% auto;
	}

	.about-info {
		background-color: #fffafe;
		left: 0;
		right: 0;
		padding: 3%;
	}

	hr {
		border: 1px solid var(--color-theme-1);
		left: 0;
		right: 0;
		margin: 0;
		padding: 0%;
	}

	h2 {
		font-size: 4.5vh;
		text-align: center;
		margin: 6vh 3%;
		font-weight: normal;
		font-family: 'Inter', sans-serif;
	}

	.about-app {
		display: flex;
		align-items: stretch;
		justify-content: space-evenly;
		flex-wrap: wrap;
		margin: auto 10%;
	}

	.about-app-item {
		background-color: #ffffff;
		border-radius: 1rem;
		min-width: 20rem;
		max-width: 29%;
		margin: 5% auto;
	}

	.about-app-item:nth-child(odd) {
		border: 0.125rem solid var(--color-text1);
		box-shadow: 0.3rem 0.25rem 0.25rem
			color-mix(in srgb, rgba(0, 0, 0, 0.5) 90%, var(--color-text1) 10%);
	}

	.about-app-item:nth-child(odd) h2 {
		color: var(--color-theme-1);
	}

	.about-app-item:nth-child(even) {
		border: 0.125rem solid var(--color-theme-1);
		box-shadow: 0.3rem 0.25rem 0.25rem
			color-mix(in srgb, rgba(0, 0, 0, 0.5) 90%, var(--color-theme-1) 10%);
	}

	.about-app-item:nth-child(even) h2 {
		color: var(--color-text1);
	}

	.about-app-item p {
		color: #000000;
		margin: auto 15% 5% 15%;
		text-align: center;
		font-size: 115%;
	}
</style>
