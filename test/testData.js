// Generated by CoffeeScript 1.12.3
(function() {
  var testData;

  testData = [
    {
      id: 'G123456A',
      cardType: 'hkid',
      expect: true
    }, {
      id: 'A5555550',
      cardType: 'hkid',
      expect: true
    }, {
      id: 'AB9876542',
      cardType: 'hkid',
      expect: true
    }, {
      id: 'A123456789',
      cardType: 'twid',
      expect: true
    }, {
      id: 'M115187864',
      cardType: 'twid',
      expect: true
    }, {
      id: 'Z256783650',
      cardType: 'twid',
      expect: true
    }, {
      id: '11010120170210193X',
      cardType: 'cnid',
      expect: true
    }, {
      id: '120103198806018241',
      cardType: 'cnid',
      expect: true
    }, {
      id: '310101200001013948',
      cardType: 'cnid',
      expect: true
    }, {
      id: '781030-5668081',
      cardType: 'krid',
      expect: true
    }, {
      id: '951103-5438151',
      cardType: 'krid',
      expect: true
    }, {
      id: '700623-2711917',
      cardType: 'krid',
      expect: true
    }, {
      id: '98765432101234567',
      cardType: 'cnid',
      expect: false
    }, {
      id: '9876543210123456789',
      cardType: 'cnid',
      expect: false
    }, {
      id: 'A12345678',
      cardType: 'twid',
      expect: false
    }, {
      id: 'A1234567890',
      cardType: 'twid',
      expect: false
    }, {
      id: 'A123456',
      cardType: 'hkid',
      expect: false
    }, {
      id: 'AB12345678',
      cardType: 'hkid',
      expect: false
    }, {
      id: '781030-566805',
      cardType: 'krid',
      expect: false
    }, {
      id: '781030-56680810',
      cardType: 'krid',
      expect: false
    }, {
      id: '110102YYYYMMDD888X',
      cardType: 'cnid',
      expect: false
    }, {
      id: '98765432101234567A',
      cardType: 'cnid',
      expect: false
    }, {
      id: 'A87654321012345678',
      cardType: 'cnid',
      expect: false
    }, {
      id: 'A12345678X',
      cardType: 'twid',
      expect: false
    }, {
      id: 'AXXXXXXXX9',
      cardType: 'twid',
      expect: false
    }, {
      id: '0123456789',
      cardType: 'twid',
      expect: false
    }, {
      id: '01234560',
      cardType: 'hkid',
      expect: false
    }, {
      id: 'A555555X',
      cardType: 'hkid',
      expect: false
    }, {
      id: 'AXXXXXX0',
      cardType: 'hkid',
      expect: false
    }, {
      id: 'A12345670',
      cardType: 'hkid',
      expect: false
    }, {
      id: 'YYMMDD-0123456',
      cardType: 'krid',
      expect: false
    }, {
      id: '010101-S123456',
      cardType: 'krid',
      expect: false
    }, {
      id: '010101-0bbbb56',
      cardType: 'krid',
      expect: false
    }, {
      id: '010101-01234N6',
      cardType: 'krid',
      expect: false
    }, {
      id: '010101-012345C',
      cardType: 'krid',
      expect: false
    }, {
      id: 'D012345678',
      cardType: 'twid',
      expect: false
    }, {
      id: 'C987654321',
      cardType: 'twid',
      expect: false
    }, {
      id: 'E345678901',
      cardType: 'twid',
      expect: false
    }, {
      id: '110101188606258888',
      cardType: 'cnid',
      expect: true
    }, {
      id: '110101188606248882',
      cardType: 'cnid',
      expect: false
    }, {
      id: '110101201701018886',
      cardType: 'cnid',
      expect: true
    }, {
      id: '110101201712128888',
      cardType: 'cnid',
      expect: false
    }, {
      id: '000101-3234560',
      cardType: 'krid',
      expect: true
    }, {
      id: '001231-3234565',
      cardType: 'krid',
      expect: false
    }, {
      id: '991128-9123457',
      cardType: 'krid',
      expect: false
    }, {
      id: '991129-9123451',
      cardType: 'krid',
      expect: true
    }, {
      id: '170101-3234569',
      cardType: 'krid',
      expect: false
    }, {
      id: '171231-3234564',
      cardType: 'krid',
      expect: false
    }, {
      id: '990001-1234568',
      cardType: 'krid',
      expect: false
    }, {
      id: '991301-1234561',
      cardType: 'krid',
      expect: false
    }, {
      id: '990100-1234560',
      cardType: 'krid',
      expect: false
    }, {
      id: '990132-1234561',
      cardType: 'krid',
      expect: false
    }, {
      id: '110102197810272321',
      cardType: 'cnid',
      expect: false
    }, {
      id: 'A234567890',
      cardType: 'twid',
      expect: false
    }, {
      id: 'C668668E',
      cardType: 'hkid',
      expect: false
    }, {
      id: '980123-1234567',
      cardType: 'krid',
      expect: false
    }
  ];

  if ((typeof module !== "undefined" && module !== null) && module.exports) {
    module.exports = testData;
  }

  if (typeof window !== "undefined" && window !== null) {
    window.testData = testData;
  }

}).call(this);
