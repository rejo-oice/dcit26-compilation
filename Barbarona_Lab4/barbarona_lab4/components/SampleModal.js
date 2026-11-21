import { Modal, View, Text, Image, Button, ScrollView, StyleSheet } from 'react-native';

export default function SampleModal({ visible, onClose }) {
  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.container}>
        <Image
  style={styles.image}
  source={require('../assets/yoonchae.jpg')}
/>

        <ScrollView style={styles.scroll}>
          <Text style={styles.text}>
            I-I-I-I bet it goes like this
Pinky up, up
Pinky up, up
Pinky up, up
Pinky up, up
Put this pinky up
One day, soon, the world's gonna end
I'm gonna make out with my new bestest friends
I wanna live large, right before it all burns down
(Up, up, pinky up)
Go hard like we're robbin' the Louvre
We Mona Lisa with a cute attitude
I wanna get high right before we're in the ground (ooh)
Ooh, we're screaming from cloud nine
No one can touch us if they tried
Ooh, but it's a state of mind
(I-I-I-I bet it goes like this)
Pin-pinky up, up
Pinky up, up
Pin-pin-pin-pinky up, up
Pinky up, up
Us against the world, shaking shake in the parking lot
If we get arrested, haha, baby, laugh it off
I love you, you love me, we manic, oui, oui
And I'd kill 'em for you if it got that deep
Fancy is a frequency
A mind of delusion, philosophy
I kinda know nothing, just like Socrates
(The only true wisdom is knowing you know nothing)
Ooh, we're screaming from cloud nine
No one can touch us if they tried
Ooh, but it's a state of mind
(I-I-I-I bet it goes like this)
Pin-pinky up, up
Pinky up, up
Pin-pin-pin-pinky up, up
Pinky- (one, two, one, two, three, four)
Pin-pinky up, up
Pinky up, up
Pin-pin-pin-pinky up, up
Pinky up, up
Pin-pin-pin-pinky-

I saw you in the mirror
Been stuck inside my mind since Saturday
Can't get you off my radar
My head is spinning time in retrograde

Still falling for you, still running from you
If we could just rewind us for a day
I'd drive you up to Bel Air
We wouldn't be the ones who got away

Stood and watched your car leaving
Struck by silver till you were out of sight
I could feel my heart bleeding
Thought you'd be the death of me, but

When you were mine
We said we'd run away
Away from here
And disappear
We'd leave it all behind
When you were mine
You gave me paradise
Then took the key
Now look at me
I'm leaving you behind

My eyes are getting hazy
I hear you whisper words into my ears
I'm on the edge of crazy
Letting my pillow kiss away my tears

Still falling for you, still running from you
But I know what we'd do if you were here
I'd drive you up to Bel Air
Pretend we could survive another year

When you were mine
We said we'd run away
Away from here
And disappear
We'd leave it all behind
When you were mine
You gave me paradise
Then took the key
Now look at me
I'm leaving you behind

Ah-ah-oh
Ah-ah-oh
Ah-ah-ah-ah-oh-ah-oh-oh-oh-oh-oh
Ah-ah-oh
Ah-ah-oh
Ah-ah-ah-ah-oh-ah-oh-oh-oh-oh-oh
Oh-oh-oh

When you were mine
We said we'd run away
Away from here
And disappear
We'd leave it all behind
When you were mine
You gave me paradise
Then took the key
Now look at me
I'm leaving you behind
          </Text>
        </ScrollView>

        <View style={styles.button}>
          <Button title="CLOSE" color="#D66B6C" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  scroll: {
    flex: 1,
    width: '100%',
  },
  text: {
    fontSize: 14,
    textAlign: 'justify',
  },
  button: {
    marginVertical: 20,
    width: 120,
  },
});