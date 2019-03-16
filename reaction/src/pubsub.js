import PubNub from 'pubnub'
import pubnubConfig from './pubnub.config'

export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL'

function PubSub() {
  // new一个 pubsub 实例
  const pubnub = new PubNub(pubnubConfig)

  // 订阅
  pubnub.subscribe({ channels: [MESSAGE_CHANNEL] })

  // 监听 App.js 文件下监听消息 相当于 pull
  this.addListener = listenerConfig => {
    pubnub.addListener(listenerConfig)
  }

  // 给外部调用的 推送消息 相当于 push
  this.publish = message => {
    console.log('publish message', message)

    // 推送消息
    pubnub.publish({
      message,
      channel: MESSAGE_CHANNEL
    })
  }
}

// 导出 PubSub
export default PubSub
