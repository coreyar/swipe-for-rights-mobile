// @flow
import { Metrics } from '../../theme';

const styles = {
  container: { marginBottom: Metrics.marginVertical / 2, height: 48 },
  helpText: (color: string) => ({
    color,
    fontSize: 12,
    lineHeight: 16,
    marginTop: -6
  }),
  accessoryView: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
    marginTop: -24,
    paddingBottom: 3,
    backgroundColor: 'transparent',
    height: 20,
    width: 20
  },
  animatedView: (active: boolean) => ({
    marginBottom: 10,
    borderBottomWidth: active ? 3 : 1,
    borderBottomColor: 'blue',
    flex: 1
  }),
  textInput: (accessory: boolean) => ({
    color: 'black',
    fontSize: 17,
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    flexDirection: 'column',
    marginTop: 2,
    marginRight: accessory ? 46 : null
  }),
  placeholder: ({color, opacity}: {color: string, opacity: number}) => ({
    color,
    opacity
  })
};

export default styles;
