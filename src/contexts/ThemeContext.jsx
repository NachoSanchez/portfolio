import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        dark: false,
    }

    componentWillMount(){
       const theme =  localStorage.getItem('theme');
       this.setState(JSON.parse(theme));
    }

    componentDidUpdate(){
        const newTheme = JSON.stringify(this.state)
        localStorage.setItem('theme', newTheme)
    }

    toggleTheme = () => {
        this.setState({dark: !this.state.dark});
    }

    render(){
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;