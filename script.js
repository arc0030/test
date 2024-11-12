document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/healthcare')
        .then(response => response.json())
        .then(data => {
            const providersDiv = document.getElementById('providers');
            data.healthcareProviders.forEach(provider => {
                const providerDiv = document.createElement('div');
                providerDiv.classList.add('provider');
                providerDiv.innerHTML = `<h3>${provider.name}</h3>
                                         <p>Address: ${provider.address}</p>
                                         <p>Services: ${provider.services.join(', ')}</p>`;
                providersDiv.appendChild(providerDiv);
            });
        })
        .catch(error => console.error('Error fetching healthcare data:', error));
});
