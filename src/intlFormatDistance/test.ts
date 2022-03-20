/* eslint-env mocha */

import assert from 'assert'
import intlFormatDistance from '.'

describe('intlFormatDistance', () => {
  const AmericanTZOnly = process.env.TZ === 'America/New_York' ? it : it.skip

  describe('default options', () => {
    it('works with the same dates', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 5, 10, 30, 0),
        new Date(1986, 3, 5, 10, 30, 0)
      )
      assert(result === 'now')
    })

    it('works with seconds in the past', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 4, 10, 30, 0),
        new Date(1986, 3, 4, 10, 30, 1)
      )
      assert(result === '1 second ago')
    })

    it('works with seconds in the future', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 4, 10, 30, 1),
        new Date(1986, 3, 4, 10, 30, 0)
      )
      assert(result === 'in 1 second')
    })

    it('works with minutes in the past', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 4, 10, 30, 0),
        new Date(1986, 3, 4, 10, 31, 0)
      )
      assert(result === '1 minute ago')
    })

    it('works with minutes in the future', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 4, 10, 31, 0),
        new Date(1986, 3, 4, 10, 30, 0)
      )
      assert(result === 'in 1 minute')
    })

    it('works with hours in the past', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 4, 10, 30, 0),
        new Date(1986, 3, 4, 11, 30, 0)
      )
      assert(result === '1 hour ago')
    })

    it('works with hours in the future', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 4, 11, 30, 0),
        new Date(1986, 3, 4, 10, 30, 0)
      )
      assert(result === 'in 1 hour')
    })

    it('works with day in the future', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 5, 10, 30, 0),
        new Date(1986, 3, 4, 10, 30, 0)
      )
      assert(result === 'tomorrow')
    })

    it('works with day in the past', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 4, 10, 30, 0),
        new Date(1986, 3, 5, 10, 30, 0)
      )
      assert(result === 'yesterday')
    })

    it('works with month in the past', () => {
      const result = intlFormatDistance(
        new Date(1986, 4, 4, 10, 30, 0),
        new Date(1986, 5, 4, 10, 30, 0)
      )
      assert(result === 'last month')
    })

    it('works with month in the future', () => {
      const result = intlFormatDistance(
        new Date(1986, 5, 4, 10, 30, 0),
        new Date(1986, 4, 4, 10, 30, 0)
      )
      assert(result === 'next month')
    })

    it('works with quarter in the past', () => {
      const result = intlFormatDistance(
        new Date(1986, 1, 4, 10, 30, 0),
        new Date(1986, 5, 4, 10, 30, 0)
      )
      assert(result === 'last quarter')
    })

    it('works with quarter in the future', () => {
      const result = intlFormatDistance(
        new Date(1986, 5, 4, 10, 30, 0),
        new Date(1986, 1, 4, 10, 30, 0)
      )
      assert(result === 'next quarter')
    })

    it('works with quarters in the past', () => {
      const result = intlFormatDistance(
        new Date(1985, 10, 4, 10, 30, 0),
        new Date(1986, 4, 4, 10, 30, 0)
      )
      assert(result === '2 quarters ago')
    })

    it('works with quarters in the future', () => {
      const result = intlFormatDistance(
        new Date(1986, 4, 4, 10, 30, 0),
        new Date(1985, 10, 4, 10, 30, 0)
      )
      assert(result === 'in 2 quarters')
    })

    it('works with year in the future', () => {
      const result = intlFormatDistance(
        new Date(1987, 3, 4, 10, 30, 0),
        new Date(1986, 3, 4, 10, 30, 0)
      )
      assert(result === 'next year')
    })

    it('works with year in the past', () => {
      const result = intlFormatDistance(
        new Date(1985, 1, 4, 10, 30, 0),
        new Date(1986, 4, 4, 10, 30, 0)
      )
      assert(result === 'last year')
    })

    it('works with years in the future', () => {
      const result = intlFormatDistance(
        new Date(1988, 3, 4, 10, 30, 0),
        new Date(1986, 3, 4, 10, 30, 0)
      )
      assert(result === 'in 2 years')
    })

    it('works with years in the past', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 4, 10, 30, 0),
        new Date(1988, 3, 4, 10, 30, 0)
      )
      assert(result === '2 years ago')
    })
  })

  describe('with options', () => {
    describe('unit', () => {
      it('works with seconds in future', () => {
        const result = intlFormatDistance(
          new Date(1987, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),
          { unit: 'second' }
        )
        assert(result === 'in 31,536,000 seconds')
      })

      it('works with seconds in past', () => {
        const result = intlFormatDistance(
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1987, 3, 4, 10, 30, 0),

          { unit: 'second' }
        )
        assert(result === '31,536,000 seconds ago')
      })

      it('works with minutes in future', () => {
        const result = intlFormatDistance(
          new Date(1987, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),
          { unit: 'minute' }
        )
        assert(result === 'in 525,600 minutes')
      })

      it('works with minutes in the past', () => {
        const result = intlFormatDistance(
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 11, 30, 0),
          { unit: 'minute' }
        )
        assert(result === '60 minutes ago')
      })

      it('works with hour in the future', () => {
        const result = intlFormatDistance(
          new Date(1986, 3, 4, 11, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),

          { unit: 'hour' }
        )
        assert(result === 'in 1 hour')
      })

      it('works with hour in the past', () => {
        const result = intlFormatDistance(
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 11, 30, 0),

          { unit: 'hour' }
        )
        assert(result === '1 hour ago')
      })

      it('works with hours in future', () => {
        const result = intlFormatDistance(
          new Date(1987, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),
          { unit: 'hour' }
        )
        assert(result === 'in 8,760 hours')
      })

      it('works with hours in past', () => {
        const result = intlFormatDistance(
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1987, 3, 4, 10, 30, 0),

          { unit: 'hour' }
        )
        assert(result === '8,760 hours ago')
      })

      it('works with today', () => {
        const result = intlFormatDistance(
          new Date(1987, 3, 4, 11, 30, 0),
          new Date(1987, 3, 4, 10, 30, 0),
          { unit: 'day' }
        )
        assert(result === 'today')
      })

      it('works with day in the future', () => {
        const result = intlFormatDistance(
          new Date(1986, 3, 5, 10, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),
          { numeric: 'always' }
        )
        assert(result === 'in 1 day')
      })

      it('works with day in the past', () => {
        const result = intlFormatDistance(
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1986, 3, 5, 10, 30, 0),

          { numeric: 'always' }
        )
        assert(result === '1 day ago')
      })

      it('works with days in the future', () => {
        const result = intlFormatDistance(
          new Date(1987, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),
          { unit: 'day' }
        )
        assert(result === 'in 365 days')
      })

      it('works with days in the past', () => {
        const result = intlFormatDistance(
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1987, 3, 4, 10, 30, 0),

          { unit: 'day' }
        )
        assert(result === '365 days ago')
      })

      it('works with weeks in the future', () => {
        const result = intlFormatDistance(
          new Date(1987, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),
          { unit: 'week' }
        )
        assert(result === 'in 52 weeks')
      })

      it('works with weeks in the past', () => {
        const result = intlFormatDistance(
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1987, 3, 4, 10, 30, 0),

          { unit: 'week' }
        )
        assert(result === '52 weeks ago')
      })

      it('works with month in the future', () => {
        const result = intlFormatDistance(
          new Date(1986, 5, 4, 10, 30, 0),
          new Date(1986, 4, 29, 10, 30, 0),
          { unit: 'month' }
        )
        assert(result === 'next month')
      })

      it('works with month in the past', () => {
        const result = intlFormatDistance(
          new Date(1986, 4, 29, 10, 30, 0),
          new Date(1986, 5, 4, 10, 30, 0),

          { unit: 'month' }
        )
        assert(result === 'last month')
      })

      it('works with months in the future', () => {
        const result = intlFormatDistance(
          new Date(1987, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),
          { unit: 'month' }
        )
        assert(result === 'in 12 months')
      })

      it('works with months in the past', () => {
        const result = intlFormatDistance(
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1987, 3, 4, 10, 30, 0),

          { unit: 'month' }
        )
        assert(result === '12 months ago')
      })

      it('works with quarters in the future', () => {
        const result = intlFormatDistance(
          new Date(1987, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),
          { unit: 'quarter' }
        )
        assert(result === 'in 4 quarters')
      })

      it('works with quarters in the past', () => {
        const result = intlFormatDistance(
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1987, 3, 4, 10, 30, 0),

          { unit: 'quarter' }
        )
        assert(result === '4 quarters ago')
      })

      it('works with years in the future', () => {
        const result = intlFormatDistance(
          new Date(1988, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),
          { unit: 'year' }
        )
        assert(result === 'in 2 years')
      })

      it('works with years in the past', () => {
        const result = intlFormatDistance(
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1988, 3, 4, 10, 30, 0),
          { unit: 'year' }
        )
        assert(result === '2 years ago')
      })
    })

    describe('numeric', () => {
      it('works with now', () => {
        const result = intlFormatDistance(
          new Date(1986, 3, 5, 10, 30, 0),
          new Date(1986, 3, 5, 10, 30, 0),
          { numeric: 'auto' }
        )
        assert(result === 'now')
      })

      it('works with seconds in the future', () => {
        const result = intlFormatDistance(
          new Date(1986, 3, 5, 10, 30, 0),
          new Date(1986, 3, 5, 10, 30, 0),
          { numeric: 'always' }
        )
        assert(result === 'in 0 seconds')
      })

      it('works with month in the future', () => {
        const result = intlFormatDistance(
          new Date(1986, 5, 4, 10, 30, 0),
          new Date(1986, 4, 4, 10, 30, 0),
          { numeric: 'always' }
        )
        assert(result === 'in 1 month')
      })

      it('works with month in the past', () => {
        const result = intlFormatDistance(
          new Date(1986, 4, 4, 10, 30, 0),
          new Date(1986, 5, 4, 10, 30, 0),
          { numeric: 'always' }
        )
        assert(result === '1 month ago')
      })

      it('works with quarter in the future', () => {
        const result = intlFormatDistance(
          new Date(1986, 5, 4, 10, 30, 0),
          new Date(1986, 1, 4, 10, 30, 0),
          { numeric: 'always' }
        )
        assert(result === 'in 1 quarter')
      })

      it('works with quarter in the past', () => {
        const result = intlFormatDistance(
          new Date(1986, 1, 4, 10, 30, 0),
          new Date(1986, 5, 4, 10, 30, 0),
          { numeric: 'always' }
        )
        assert(result === '1 quarter ago')
      })

      it('works with year in the future', () => {
        const result = intlFormatDistance(
          new Date(1986, 4, 4, 10, 30, 0),
          new Date(1985, 4, 4, 10, 30, 0),
          { numeric: 'always' }
        )
        assert(result === 'in 1 year')
      })

      it('works with year in the past', () => {
        const result = intlFormatDistance(
          new Date(1985, 1, 4, 10, 30, 0),
          new Date(1986, 4, 4, 10, 30, 0),
          { numeric: 'always' }
        )
        assert(result === '1 year ago')
      })
    })

    describe('locale', () => {
      it('works with Spanish locale', () => {
        const result = intlFormatDistance(
          new Date(1986, 4, 4, 10, 30, 0),
          new Date(1985, 4, 4, 10, 30, 0),
          { locale: 'es' }
        )
        assert(result === 'el próximo año')
      })

      it('works with the same dates for de-DE locale', () => {
        const result = intlFormatDistance(
          new Date(1986, 3, 5, 10, 30, 0),
          new Date(1986, 3, 5, 10, 30, 0),
          { locale: 'de-DE', localeMatcher: 'lookup' }
        )
        assert(result === 'jetzt')
      })

      it('works with seconds in the future for de-DE locale', () => {
        const result = intlFormatDistance(
          new Date(1986, 3, 5, 10, 30, 0),
          new Date(1986, 3, 5, 10, 30, 0),
          { locale: 'de-DE', numeric: 'always' }
        )
        assert(result === 'in 0 Sekunden')
      })

      it('works with minutes in the future for de locale', () => {
        const result = intlFormatDistance(
          new Date(1986, 3, 5, 11, 30, 0),
          new Date(1986, 3, 5, 10, 30, 0),
          { unit: 'minute', locale: 'de' }
        )
        assert(result === 'in 60 Minuten')
      })

      it('works with minutes in the future for es locale', () => {
        const result = intlFormatDistance(
          new Date(1986, 3, 5, 11, 30, 0),
          new Date(1986, 3, 5, 10, 30, 0),
          { unit: 'minute', locale: 'es' }
        )
        assert(result === 'dentro de 60 minutos')
      })

      it('it works with ru locale', () => {
        const result = intlFormatDistance(new Date(), new Date(), {
          locale: 'ru',
        })
        assert(result === 'сейчас')
      })
    })

    describe('edge cases', () => {
      // falls back to { numeric: always }
      it('works with tomorrow', () => {
        const result = intlFormatDistance(
          new Date(1985, 4, 5, 10, 30, 0),
          new Date(1985, 4, 4, 10, 30, 0),
          { style: 'short', numeric: 'auto' }
        )
        assert(result === 'tomorrow')
      })

      // To make CI tests pass
      AmericanTZOnly('works with month', () => {
        const result = intlFormatDistance(
          new Date(1985, 5, 4, 10, 30, 0),
          new Date(1985, 4, 4, 10, 30, 0),
          { style: 'short', numeric: 'auto' }
        )
        assert(result === 'next mo')
      })

      // To make CI tests pass
      AmericanTZOnly('works with year', () => {
        const result = intlFormatDistance(
          new Date(1986, 4, 5, 10, 30, 0),
          new Date(1985, 4, 5, 10, 30, 0),
          { style: 'short', numeric: 'auto' }
        )
        assert(result === 'next yr')
      })

      it('handles dates before 100 AD', () => {
        const result = intlFormatDistance(
          new Date(1, 3, 4, 11, 30, 0),
          new Date(1, 3, 4, 10, 30, 0),
          { unit: 'minute' }
        )
        assert(result === 'in 60 minutes')
      })
    })
  })

  describe('errors', () => {
    it('checks the first date', () => {
      assert.throws(
        intlFormatDistance.bind(
          null,
          new Date(NaN),
          new Date(1986, 3, 4, 10, 30, 0)
        ),
        RangeError
      )
    })

    it('checks the second date', () => {
      assert.throws(
        intlFormatDistance.bind(
          null,
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(NaN)
        ),
        RangeError
      )
    })

    it('checks both dates', () => {
      assert.throws(
        intlFormatDistance.bind(null, new Date(NaN), new Date(NaN)),
        RangeError
      )
    })

    it('checks unit', () => {
      assert.throws(
        // @ts-ignore: the value doesnt match one of the Unit values from '../types.ts'
        intlFormatDistance.bind(
          null,
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),
          { unit: 'wrongValue' }
        ),
        RangeError
      )
    })

    it('checks locale', () => {
      assert.throws(
        intlFormatDistance.bind(
          null,
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),
          { locale: 'wrongValue' }
        ),
        RangeError
      )
    })

    it('checks localeMatcher', () => {
      assert.throws(
        // @ts-expect-error
        intlFormatDistance.bind(
          null,
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),
          { localeMatcher: 'wrongValue' }
        ),
        RangeError
      )
    })

    it('checks numeric', () => {
      assert.throws(
        // @ts-expect-error
        intlFormatDistance.bind(
          null,
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),
          { numeric: 'wrongValue' }
        ),
        RangeError
      )
    })

    it('checks style', () => {
      assert.throws(
        // @ts-expect-error
        intlFormatDistance.bind(
          null,
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),
          { style: 'wrongValue' }
        ),
        RangeError
      )
    })
  })
})
