export default {
  name: 'Scene',
  render: [
    {
      component: 'View',
      props: {
        style: {
          flex: 1,
          marginTop: 24,
        },
      },
      children: [
        {
          component: 'View',
          props: {
            style: {
              flexDirection: 'row',
              aligItems: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
              paddingHorizontal: 5,
              backgroundColor: 'rgb(222,70,70)',
            },
          },
          children: [
            {
              component: 'Text',
              props: {
                style: {
                  color: '#FFF',
                  fontSize: 20,
                  fontWeight: '500',
                },
              },
              children: ['About Us'],
            },
          ],
        },
        {
          component: 'Image',
          props: {
            style: {
              height: undefined,
              width: undefined,
              flex: 1,
            },
            source: "require('./logo.jpg')",
            resizeMode: 'contain',
            resizeMethod: 'auto',
          },
          children: [],
        },
        {
          component: 'View',
          props: {
            style: {
              padding: 5,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'rgb(222,70,70)',
            },
          },
          children: [
            {
              component: 'TouchableOpacity',
              props: {
                style: {
                  flex: 1,
                  margin: 5,
                  padding: 10,
                  borderWidth: 1,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: 'rgb(200,60,60)',
                  backgroundColor: 'rgb(225,100,100)',
                },
              },
              children: [
                {
                  component: 'Text',
                  props: {
                    style: {
                      color: '#FFF',
                      fontSize: 18,
                    },
                  },
                  children: ['Button 1'],
                },
              ],
            },
            {
              component: 'TouchableOpacity',
              props: {
                style: {
                  flex: 1,
                  margin: 5,
                  padding: 10,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#DFF',
                  backgroundColor: '#FFF',
                },
              },
              children: ['Button 2'],
            },
          ],
        },
      ],
    },
  ],
};
