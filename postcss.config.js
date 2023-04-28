import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import reporter from 'postcss-reporter'

export const plugins = [autoprefixer(), cssnano(), reporter()]

export const options = {
  map: true,
  // Log the processed CSS to the console
  onEnd: {
    'postcss-reporter': {
      clearReportedMessages: true,
    },
  },
}
