import React, {Component} from 'react';

import Auxiliaire from '../Auxiliaire/Auxiliaire';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    
    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        } );
    }
    
    render () {
        return (
            <Auxiliaire>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer 
                open={this.state.showSideDrawer} 
                closed={this.sideDrawerCloseHandler} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Auxiliaire>
        )
    }
}

export default Layout;