var ui ={};

ui.navigation = `

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#" onclick="defaultModule()">BadBank</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#createAccount" onclick="LoadCreateAccount()" id="createAccount">Create Account</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" onclick="loading()" id="login">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" onclick="loadDeposit()">Deposit</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" onclick="loadWithdraw()">Withdraw</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" onclick="loadBalance()">Balance</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" onclick="loadAllData()">AllData</a>
            </li>
        </ul>
    </div>
</nav>
`;

var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;

ui.navigation = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">Create Account</div>
    <div class="card-body">
        Name<br>
        <input type="input" class="form-control" id="name" placeholder="Enter name"><br>
        Email address<br>
        <input type="input" class="form-control" id="email" placeholder="Enter email"><br>
        Password<br>
        <input type="input" class="form-control" id="password" placeholder="Enter password"><br>
        <button type="submit" id="submit" class="btn" onclick="create()">Create Account</button>
        <div id='CreateStatus'></div>
    </div> 
</div>
  `;

