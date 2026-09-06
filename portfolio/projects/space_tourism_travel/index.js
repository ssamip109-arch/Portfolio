const menuToggle = document.querySelector('.mobile-nav-toggle');
const primaryNavigation = document.querySelector('#primary-navigation');

// when someone clicks the hamburger button
menuToggle.addEventListener('click', () => {
	// if the nav is closed, open it
	// if the nav is open, close it
	const isVisible = primaryNavigation.getAttribute('data-visible') === 'true';
	const nextVisibility = !isVisible;

	primaryNavigation.setAttribute('data-visible', String(nextVisibility));
	menuToggle.setAttribute('aria-expanded', String(nextVisibility));
});

// ---------------------------
// Destination page tabs
// ---------------------------

const destinationData = {
	moon: {
		name: 'Moon',
		description: "See our planet as you've never seen it before. A perfect relaxing trip away to help belay stress. Enjoy the magnificent view of the blue planet you call home.",
		distance: '384,400 km',
		time: '3 days',
		image: './assets/destination/image-moon.png',
		imageWebp: './assets/destination/image-moon.webp'
	},
	mars: {
		name: 'Mars',
		description: "Pack your hiking boots — Olympus Mons, the tallest planetary mountain in the solar system, is waiting. It's over two and a half times the height of Everest.",
		distance: '225 mil. km',
		time: '9 months',
		image: './assets/destination/image-mars.png',
		imageWebp: './assets/destination/image-mars.webp'
	},
	europa: {
		name: 'Europa',
		description: "The smallest of Jupiter's four Galilean moons, Europa's icy surface makes it a natural spot for skating, curling, or just admiring the view from your spacesuit.",
		distance: '628 mil. km',
		time: '3 years',
		image: './assets/destination/image-europa.png',
		imageWebp: './assets/destination/image-europa.webp'
	},
	titan: {
		name: 'Titan',
		description: "One of the few moons with a dense atmosphere, Titan feels like home — just a few hundred degrees colder — with unbeatable views of Saturn's rings.",
		distance: '1.6 bil. km',
		time: '7 years',
		image: './assets/destination/image-titan.png',
		imageWebp: './assets/destination/image-titan.webp'
	}
};

const tabButtons = document.querySelectorAll('[data-destination]');
const destinationImage = document.querySelector('#destination-image img');
const destinationSource = document.querySelector('#destination-image source');
const destinationTitle = document.querySelector('#destination-title');
const destinationDescription = document.querySelector('#destination-description');
const destinationDistance = document.querySelector('#destination-distance');
const destinationTime = document.querySelector('#destination-time');

if (tabButtons.length) {
	tabButtons.forEach((button) => {
		button.addEventListener('click', () => selectTab(button));

		// arrow-key navigation, matching the WAI-ARIA tab pattern
		button.addEventListener('keydown', (event) => {
			if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;

			const buttonsArray = Array.from(tabButtons);
			const currentIndex = buttonsArray.indexOf(event.target);
			const direction = event.key === 'ArrowRight' ? 1 : -1;
			const nextIndex = (currentIndex + direction + buttonsArray.length) % buttonsArray.length;

			buttonsArray[nextIndex].focus();
			selectTab(buttonsArray[nextIndex]);
		});
	});
}

function selectTab(selectedButton) {
	tabButtons.forEach((button) => {
		const isSelected = button === selectedButton;
		button.setAttribute('aria-selected', String(isSelected));
		button.setAttribute('tabindex', isSelected ? '0' : '-1');
	});

	const data = destinationData[selectedButton.dataset.destination];

	destinationImage.src = data.image;
	destinationImage.alt = data.name;
	destinationSource.srcset = data.imageWebp;
	destinationTitle.textContent = data.name;
	destinationDescription.textContent = data.description;
	destinationDistance.textContent = data.distance;
	destinationTime.textContent = data.time;
}


// ---------------------------
// Crew page dots
// ---------------------------

const crewData = {
	douglas: {
		role: 'Commander',
		name: 'Douglas Hurley',
		bio: "Douglas Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
		image: './assets/crew/image-douglas-hurley.png',
		imageWebp: './assets/crew/image-douglas-hurley.webp'
	},
	mark: {
		role: 'Mission Specialist',
		name: 'Mark Shuttleworth',
		bio: "Mark Shuttleworth is a South African entrepreneur who became the first African in space, spending eight days aboard the ISS as a private spaceflight participant.",
		image: './assets/crew/image-mark-shuttleworth.png',
		imageWebp: './assets/crew/image-mark-shuttleworth.webp'
	},
	victor: {
		role: 'Pilot',
		name: 'Victor Glover',
		bio: "Victor Glover is an American test pilot and NASA astronaut, serving as pilot on the historic Crew-1 mission — the first crewed operational flight of Crew Dragon.",
		image: './assets/crew/image-victor-glover.png',
		imageWebp: './assets/crew/image-victor-glover.webp'
	},
	anousheh: {
		role: 'Flight Engineer',
		name: 'Anousheh Ansari',
		bio: "Anousheh Ansari is an Iranian-American engineer and the first self-funded woman to fly to the ISS, spending 10 days orbiting Earth as a spaceflight participant.",
		image: './assets/crew/image-anousheh-ansari.png',
		imageWebp: './assets/crew/image-anousheh-ansari.webp'
	}
};

const crewButtons = document.querySelectorAll('[data-crew]');

if (crewButtons.length) {
	const crewImage = document.querySelector('#crew-image img');
	const crewSource = document.querySelector('#crew-image source');
	const crewRole = document.querySelector('#crew-role');
	const crewName = document.querySelector('#crew-name');
	const crewBio = document.querySelector('#crew-bio');

	crewButtons.forEach((button) => {
		button.addEventListener('click', () => selectCrew(button));

		button.addEventListener('keydown', (event) => {
			if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;

			const buttonsArray = Array.from(crewButtons);
			const currentIndex = buttonsArray.indexOf(event.target);
			const direction = event.key === 'ArrowRight' ? 1 : -1;
			const nextIndex = (currentIndex + direction + buttonsArray.length) % buttonsArray.length;

			buttonsArray[nextIndex].focus();
			selectCrew(buttonsArray[nextIndex]);
		});
	});

	function selectCrew(selectedButton) {
		crewButtons.forEach((button) => {
			const isSelected = button === selectedButton;
			button.setAttribute('aria-selected', String(isSelected));
			button.setAttribute('tabindex', isSelected ? '0' : '-1');
		});

		const data = crewData[selectedButton.dataset.crew];

		crewImage.src = data.image;
		crewImage.alt = data.name;
		crewSource.srcset = data.imageWebp;
		crewRole.textContent = data.role;
		crewName.textContent = data.name;
		crewBio.textContent = data.bio;
	}
}

// ---------------------------
// Technology page numbers
// ---------------------------

const techData = {
	'launch-vehicle': {
		title: 'Launch vehicle',
		description: "A launch vehicle or rocket is used to deliver a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X rocket is the most powerful in operation.",
		portrait: './assets/technology/image-launch-vehicle-portrait.jpg',
		landscape: './assets/technology/image-launch-vehicle-landscape.jpg'
	},
	spaceport: {
		title: 'Spaceport',
		description: "A spaceport or cosmodrome is a site used for launching or receiving spacecraft, and can serve as a base for operations, similar to an airport for aircraft.",
		portrait: './assets/technology/image-spaceport-portrait.jpg',
		landscape: './assets/technology/image-spaceport-landscape.jpg'
	},
	capsule: {
		title: 'Space capsule',
		description: "A space capsule is an often crewed spacecraft that lacks wings and is capable of atmospheric reentry, designed to safely carry its occupants back to Earth.",
		portrait: './assets/technology/image-space-capsule-portrait.jpg',
		landscape: './assets/technology/image-space-capsule-landscape.jpg'
	}
};

const techButtons = document.querySelectorAll('[data-tech]');

if (techButtons.length) {
	const techImage = document.querySelector('#tech-image img');
	const techPortraitSource = document.querySelector('#tech-image source[media*="45em"]')
		? document.querySelectorAll('#tech-image source')[0] 
		: null;
	const techLandscapeSource = document.querySelectorAll('#tech-image source')[1];
	const techTitle = document.querySelector('#tech-title');
	const techDescription = document.querySelector('#tech-description');

	techButtons.forEach((button) => {
		button.addEventListener('click', () => selectTech(button));

		button.addEventListener('keydown', (event) => {
			if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;

			const buttonsArray = Array.from(techButtons);
			const currentIndex = buttonsArray.indexOf(event.target);
			const direction = event.key === 'ArrowRight' ? 1 : -1;
			const nextIndex = (currentIndex + direction + buttonsArray.length) % buttonsArray.length;

			buttonsArray[nextIndex].focus();
			selectTech(buttonsArray[nextIndex]);
		});
	});

	function selectTech(selectedButton) {
		techButtons.forEach((button) => {
			const isSelected = button === selectedButton;
			button.setAttribute('aria-selected', String(isSelected));
			button.setAttribute('tabindex', isSelected ? '0' : '-1');
		});

		const data = techData[selectedButton.dataset.tech];

		techImage.src = data.landscape;
		techImage.alt = data.title;
		if (techPortraitSource) techPortraitSource.srcset = data.portrait;
		if (techLandscapeSource) techLandscapeSource.srcset = data.landscape;
		techTitle.textContent = data.title;
		techDescription.textContent = data.description;
	}
}