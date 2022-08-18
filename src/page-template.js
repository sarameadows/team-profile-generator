const generateCards = employeeArr => {
    const employeeCards = [];
    employeeArr.forEach(employee => {
        switch (employee.getRole()) {
            case "Manager":
                const managerCard = `
                <div class="card col-3 m-3">
                    <div class="row card-header text-light bg-info">
                        <h2 class="col-12">${employee.name}</h2>
                        <h3 class="col-12">${employee.getRole()}</h3>
                    </div>
                    <div class="text-info">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                            <li class="list-group-item">Office number: ${employee.officeNumber}</li>
                        </ul>
                    </div>
                </div>
                `;
                employeeCards.push(managerCard);
                return;
            case "Engineer":
                engineerCard = `
                <div class="card col-3 m-3">
                    <div class="row card-header text-light bg-info">
                        <h2 class="col-12">${employee.name}</h2>
                        <h3 class="col-12">${employee.getRole()}</h3>
                    </div>
                    <div class="text-info">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></li>
                        </ul>
                    </div>
                </div>
                `;
                employeeCards.push(engineerCard);
                return;
            case "Intern":
                internCard = `
                <div class="card col-3 m-3">
                    <div class="row card-header text-light bg-info">
                        <h2 class="col-12">${employee.name}</h2>
                        <h3 class="col-12">${employee.getRole()}</h3>
                    </div>
                    <div class="text-info">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                            <li class="list-group-item">School: ${employee.school}</li>
                        </ul>
                    </div>
                </div>
                `;
                employeeCards.push(internCard);
                return;
        }
    });
    const employeeHTML = employeeCards.join('');
    return employeeHTML;
}

module.exports = employees => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie-edge">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css">
    </head>

    <body>

        <header>
            <div class="bg-danger mb-5">
                <h1 class="text-light d-flex justify-content-center py-4">My Team</h1>
            </div>
        </header>

        <main>
            <div class="container">
                <div class="row bg-light justify-content-center">
                    ${generateCards(employees)}
                </div>
            </div>
        </main>

    </body>
    </html>
    `;
};
