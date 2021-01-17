import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Why from './components/why'
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';


export class App extends Component {

    state = {
        landingPageData: {},
    }
    getlandingPageData() {
        this.setState({landingPageData : JsonData})
    }

    componentDidMount() {
        this.getlandingPageData();
    }

    render() {
        return (
            <div>
                <Navigation />
                <Header data={this.state.landingPageData.Header} />
                <Why data={this.state.landingPageData.Why} />
                <About data={this.state.landingPageData.About} />
                <Services data={this.state.landingPageData.Services} />
                <Gallery />
                <Team data={this.state.landingPageData.Team} />
                <Contact data={this.state.landingPageData.Contact} />
            </div>
        )
    }
}

export default App;