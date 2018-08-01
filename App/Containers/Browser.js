import React, {Component} from 'react';
import {  Header,  Content, Container,  Left, Right,  Icon, Button,   Text, Body,  Title,} from 'native-base';
import { View,  Image,  FlatList,   ActivityIndicator} from 'react-native';
import iamges from '../Themes/Images'

class Item extends Component {
    render() {
        return (
            <View style={StyleDefault.itemAdd}>
                <Image source={iamges.item }
                       style={StyleDefault.itemImage}/>
                <View>
               <Text style={StyleDefault.itemPrice}>
                   <Text style={StyleDefault.price}>  AUD  $ {this.props.item.price}</Text> /day
                </Text>
            </View>
                <View>
                    <Text style={StyleDefault.itemName}>{this.props.item.name}</Text>
                </View>
                <Text style={StyleDefault.itemDesc}> {this.props.item.description}   </Text>
            </View>

        )
    }
}
class MyListItem extends Component {
  render() {
      return (
      <View style={StyleDefault.listItem}>
          <View style={StyleDefault.borderlistItemRadius}>
              <Image source={{ uri: this.props.logo }}
                     style={StyleDefault.listItemImage}/>
          </View>

          <Text>
              {this.props.name}
          </Text>
      </View>
    );
  }

}

// Get category from Api

export default class Browser extends Component {

  constructor(props){
      super(props);
       this.state ={ isLoading: true}
  }
     componentDidMount(){
    return fetch('http://192.168.1.131:8000/api/category/get')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  // Render Catebory
  _renderItem = ({item}) => (
    <MyListItem
     id={item.id}
     name= {item.name}
    logo= {item.logo}
   />
  );
    render() {
        if(this.state.isLoading){
           return(
             <View style={{flex: 1, padding: 20}}>
               <ActivityIndicator/>
             </View>
           )
         }
        return (
            <Container>
                <Header style={StyleDefault.header}>
                    <Left>
                        <Button hasText transparent>
                            <Text>Back</Text>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Browser</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='search'/>
                        </Button>
                    </Right>
                </Header>
                <Content style={StyleDefault.bgColor}>
                    <View style={StyleDefault.blogCate}>
                        <View style={StyleDefault.flexHeader}>
                            <View style={StyleDefault.colLeft}>
                                <Text style={StyleDefault.categoryName}>
                                    {'categories'.toUpperCase()}
                                </Text>
                            </View>
                            <View style={StyleDefault.colRight}>
                                <Button iconRight transparent style={StyleDefault.categoryViewMore}>
                                    <Text style={StyleDefault.categoryViewMoreText}>{'See all'.toLowerCase()}</Text>
                                    <Icon type="FontAwesome" name='chevron-right'
                                          style={StyleDefault.categoryViewMoreIcon}/>
                                </Button>
                            </View>
                        </View>
                        <View style={StyleDefault.listItemFlex}>
                          <FlatList
                            horizontal={false}
                            numColumns = {5} 
                            data={this.state.dataSource}
                            renderItem={this._renderItem}
                            keyExtractor={(item, index) => index}
                          />
                        </View>
                    </View>
                    <View style={StyleDefault.blogAdd}>
                        <View style={StyleDefault.flexHeader}>
                            <View style={StyleDefault.colLeft}>
                                <Text style={StyleDefault.categoryName}>
                                    {'Recently Added'.toUpperCase()}
                                </Text>
                            </View>
                            <View style={StyleDefault.colRight}>
                                <Button iconRight transparent style={StyleDefault.categoryViewMore}>
                                    <Text style={StyleDefault.categoryViewMoreText}>{'See all'.toLowerCase()}</Text>
                                    <Icon type="FontAwesome" name='chevron-right'
                                          style={StyleDefault.categoryViewMoreIcon}/>
                                </Button>
                            </View>
                        </View>
                        <View style={StyleDefault.itemAddList}>
                            <FlatList horizontal={true}
                                data={BrowserData}
                                renderItem={({item, index}) => {
                                    return (
                                        <Item item={item} index={index}>
                                        </Item>);
                                }}>

                            </FlatList>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}
