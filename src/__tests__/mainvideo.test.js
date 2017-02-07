import React from 'react'
// import renderer from 'react-test-renderer'
import {shallow} from 'enzyme';
import MainVideo from '../components/MainVideo.js'
import {fetchVideos} from '../actions.js'

test('MainVideo is always the right size and stuff', () =>{
const video = shallow(
  <MainVideo id={'REu2BcnlD34'}/>
  )
// console.log(video)

expect(video.node.props.id).toEqual('big')
expect(video.node.props.width).toEqual('640')
expect(video.node.props.height).toEqual('360')
expect(video.node.props.src).toEqual('https://www.youtube.com/embed/REu2BcnlD34')


})

