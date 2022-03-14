<h1 style="margin-bottom:0">Live at:</h1>
https://cybermoves.netlify.app/ </br>

<h2 style="margin-bottom:0">About project</h2>
Website allowing user to create combination of commands that are displayed in real time on 3d model using r3f (library based on three.js). 
<br/><br/>
<p>You can use website to create commands for your robot but you don't have to copy them manually (if you want to, you can), for that I'm providing few public endpoints so you can fetch that data directly on your robot! If you want to know how to do that head down to <b>Endpoints</b>.</p>
<h2 style="margin-bottom:0">Public endpoints</h2>

<h3>Get command by name</h3>

<p>You can get your command by fetching data from <br>
<a>https://cybermoves.herokuapp.com/api/public/commandByName?name=NAME</a> <br>
where you have to replace NAME with name of your command (remember that command is always named username_nameOfTheComand, so if your username is tom and you named command mySuperCommand then it's name is tom_mySuperCommand</p>

<b>Reponse:</b>

<pre>
{
    "name": "username_nameOfTheCommand",
    "username": "test",
    "commands": [
        {
            "angle1": 100,
            "angle2": 200,
            "angle3": 300
        },
        {
            "angle1": 150,
            "angle2": 250,
            "angle3": 350
        }
    ],
    "category": ["someCategory", "differentCategory"],
    "robotType": "hexapod"
}
</pre>

<b>Axios example:</b>

<pre>
try {
    const res = await axios.get(https://cybermoves.herokuapp.com/api/public/commandByName?name=testName);
    console.log(res.data);
} catch (e) {
    console.log(e);
}
</pre>
<h3>Get all names for robot type</h3>

<p>You can get names of all available commands for choosen robot type from<br>
<a>https://cybermoves.herokuapp.com/api/public/allNamesByType?robotType=ROBOTTYPE</a> <br>
where you have to replace ROBOTYPE with type of robot.</p>

<b>Currently available types of robots</b>

<ul>
<li>hexapod</li>
<li>robotArm3dof</li>
<li>robotArm4dof</li>
<li>oneAxis</li>
<li>multipleAxis</li>
</ul>

<b>Reponse:</b>

<pre>
[
    {
        "name": "nameOfFirstCommand"
    },
    {
        "name": "nameOfSecondCommand"
    },
    {
        "name": "nameOfThirdCommand"
    }
]
</pre>

<b>Axios example:</b>

<pre>
try {
    const res = await axios.get(https://cybermoves.herokuapp.com/api/public/allNamesByType?robotType=hexapod);
    console.log(res.data);
} catch (e) {
    console.log(e);
}
</pre>
