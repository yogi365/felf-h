import React from 'react'
import Button from './Button'

export default class States extends React.Component
{
    state = {
        counter: 0,
        intervalFlag: false,
        laps: []
    }

    startCounter = () =>
    {
        // if(intervalFlag==false)
        if (!this.state.intervalFlag)
        {
            // this.state.intervalFlag = false
            this.setState({ intervalFlag: true })
            this.interval = setInterval(() =>
            {
                this.setState((prevState) => ({ counter: prevState.counter + 1 }))
            }, 1000)
        }
    }

    stopCounter = () =>
    {
        clearInterval(this.interval);
        this.setState({ intervalFlag: false })
    }

    addLaps = () =>
    {
        this.setState((prevState) => ({ laps: [...prevState.laps, prevState.counter] }))
    }

    resetCounter = () =>
    {
        this.setState({ counter: 0 })
    }

    shouldComponentUpdate(props, state)
    {
        if (state.counter == 5)
        {
            return false;
        }
        return true;
    }
    componentWillUnmount()
    {
        console.log("Component unmounted")
        clearInterval(this.interval)
    }

    render()
    {
        return (
            <div>
                <h2>Counter: {this.state.counter}</h2>
                <Button name="Start" eventHandler={this.startCounter} />
                {
                    this.state.intervalFlag
                        ? <button onClick={this.stopCounter}>Stop</button>
                        : <button onClick={this.resetCounter}>Reset</button>
                }
                <button onClick={this.addLaps}>Laps</button>
                <ul>
                    {
                        this.state.laps.map(lap =>
                        {
                            return <li>{lap}</li>
                        })
                    }
                </ul>
            </div>
        )
    }


}