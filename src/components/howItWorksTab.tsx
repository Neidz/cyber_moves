import "../styles/sections/howItWorks.scss";

export const HowItWorksTab = () => {
    return (
        <div className="howItWorksTab">
            <div className="section">
                <h2>Controls</h2>
                <p>There are multiple ways to control angle of each axis</p>
                <ul>
                    <li>
                        <h3>arrow control (only on desktop)</h3>
                        <p>
                            When you click on any part of the model you will set it as active object, that allows you to
                            rotate model with arrow keys on keyboard. If you want to unselect object just click "esc" key or
                            click on that part of the model again
                        </p>
                    </li>
                    <li>
                        <h3>arrow buttons on screen</h3>
                        <p>
                            Similary to arrow control, when you click on any part of the model it will be set as active
                            object which you can then control using buttons at the bottom of the screen
                            <br />
                            <b>left arrow button</b> - decrease angle <br />
                            <b>right arrow button</b> - increase angle <br />
                            <b>+ sign button</b> - creates command from current angles
                        </p>
                    </li>
                </ul>

                <h2>Tabs</h2>
                <ul>
                    <li>
                        <h3>angles</h3>
                        <p>
                            Displays current angles for each axis allowing user to change them. Color of text is the same as
                            color on model which allows easier identification for larger models
                            <br />
                            <br />
                            <b>zero all angles</b> - sets all angles to 0
                            <br />
                            <b>add command</b> - creates command from current angles, commands can be find in commands tab
                            <br />
                            <b>remove last command</b> - removes last created command
                        </p>
                    </li>
                    <li>
                        <h3>commands</h3>
                        <p>
                            Displays list of created commands. Color of each angle in a single command corresponds to color
                            of that element on the model and angle input in "angles" tab <br />
                            <b>execute commands</b> - starts sequence of moves created with commands
                        </p>
                    </li>
                    <li>
                        <h3>options</h3>
                        <p>
                            <b>speed of arrow control</b> - defines how fast arrows (keys on keyboard or buttons on the
                            bottom of the screen) are going to change angle. Value of angle is incremented by that amount
                            <br />
                            <b>commands execution animation speed</b> - defines how much time (in milliseconds) single
                            command execution is going to take during animation played after clicking "execute commands"
                            button
                        </p>
                    </li>
                    <li>
                        <h3>visuals</h3>
                        <p>
                            Click on any button to display color picker which allows you to change color of each axis and
                            other elements in the render
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};
