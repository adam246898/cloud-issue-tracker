// Initial list of cloud issues
let issues = [
	{
		title: "Unable to access Wi-Fi",
		description: "Connection fails in the teaching lab.",
		priority: "High",
		status: "Open"
	}
];

// Function to render all issues dynamically into the DOM
function renderIssues() {
	// Find the second panel section (Current Issues)
	const currentIssuesSection = document.querySelector('.panel:nth-of-type(2)');

	if (!currentIssuesSection) return;

	// Keep the heading, clear any existing cards
	const heading = currentIssuesSection.querySelector('h2');
	currentIssuesSection.innerHTML = '';
	currentIssuesSection.appendChild(heading);

	// Loop through the issues array and create HTML elements
	issues.forEach(issue => {
		const article = document.createElement('article');
		article.className = 'issue-card';
		article.innerHTML = `
			<h3>${issue.title}</h3>
			<p>${issue.description}</p>
			<p><strong>Priority:</strong> ${issue.priority}</p>
			<p><strong>Status:</strong> ${issue.status || 'Open'}</p>
		`;
		currentIssuesSection.appendChild(article);
	});
}

// Event listener when the page loads
document.addEventListener('DOMContentLoaded', () => {
	renderIssues();

	// Handle form submission to create new issues dynamically
	const form = document.getElementById('issue-form');
	if (form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			// Get values from input fields
			const title = document.getElementById('title').value;
			const description = document.getElementById('description').value;
			const priority = document.getElementById('priority').value;

			if (!title.trim()) return;

			// Create new issue object and add it to our array
			const newIssue = {
				title,
				description,
				priority,
				status: 'Open'
			};

			issues.push(newIssue);

			// Re-render the UI and clear the form
			renderIssues();
			form.reset();
		});
	}
});
