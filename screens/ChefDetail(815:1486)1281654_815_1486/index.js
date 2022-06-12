import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_815_1487}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84560250-d62b-4b2c-95e6-5aa4c5209b94"
          }}
          style={styles.ImageBackground_815_1488}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/039abfd8-95d1-45e6-ac50-e25d74d00c7e"
          }}
          style={styles.ImageBackground_815_1489}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6e9a4a1-0858-40ee-89c1-0f8a64fcb38d"
          }}
          style={styles.ImageBackground_815_1490}
        />
      </View>
      <View style={styles.View_815_1491}>
        <View style={styles.View_815_1492}>
          <View style={styles.View_815_1493}>
            <View style={styles.View_815_1494}>
              <View style={styles.View_815_1495}>
                <Text style={styles.Text_815_1495}>Bon Appetit Voyage</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_815_1496}>
          <TouchableOpacity
            style={styles.TouchableOpacity_815_1497}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("815_3"))
            }
          >
            <Text style={styles.Text_815_1497}>Home</Text>
          </TouchableOpacity>
          <View style={styles.View_815_1498}>
            <Text style={styles.Text_815_1498}>Contact Us</Text>
          </View>
          <View style={styles.View_815_1499}>
            <Text style={styles.Text_815_1499}>Blog</Text>
          </View>
          <View style={styles.View_815_1500}>
            <Text style={styles.Text_815_1500}>FAQ</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_815_1501}>
        <View style={styles.View_815_1502}>
          <View style={styles.View_815_1503} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/221edc60-7b1c-4bed-85da-bb1b6aa0caf5"
            }}
            style={styles.ImageBackground_815_1504}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b4948b5-63fb-462f-b131-013de4bdfa12"
            }}
            style={styles.ImageBackground_815_1505}
          />
        </View>
        <View style={styles.View_815_1506} />
        <View style={styles.View_815_1507}>
          <View style={styles.View_815_1508}>
            <Text style={styles.Text_815_1508}>Our Admin</Text>
          </View>
          <View style={styles.View_815_1509}>
            <View style={styles.View_815_1510}>
              <Text style={styles.Text_815_1510}>Home</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34297205-77dc-415d-814b-57781b695a83"
              }}
              style={styles.ImageBackground_815_1511}
            />
            <View style={styles.View_815_1513}>
              <Text style={styles.Text_815_1513}>Our Admin</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_815_1514}>
        <View style={styles.View_815_1515}>
          <View style={styles.View_815_1516}>
            <View style={styles.View_815_1517} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d74cfc4c-642f-4c50-9cec-50d8e06978b0"
              }}
              style={styles.ImageBackground_815_1518}
            />
          </View>
          <View style={styles.View_815_1519} />
        </View>
        <View style={styles.View_815_1520}>
          <View style={styles.View_815_1521}>
            <View style={styles.View_815_1522}>
              <Text style={styles.Text_815_1522}>Blogger &amp; Founder</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1dda4dff-e6fb-4995-bea0-c62694b0e56d"
              }}
              style={styles.ImageBackground_815_1523}
            />
            <View style={styles.View_815_1526}>
              <Text style={styles.Text_815_1526}>Vy Pham</Text>
            </View>
          </View>
          <View style={styles.View_815_1527}>
            <View style={styles.View_815_1528}>
              <Text style={styles.Text_815_1528}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
                sit. Auctor sit iaculis in arcu. Vulputate nulla lobortis mauris
                eget sit. Nulla scelerisque scelerisque consectetur adipiscing
                elit.
              </Text>
            </View>
            <View style={styles.View_815_1529}>
              <View style={styles.View_815_1530}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a80149b-5525-4149-a643-d84ca45ed7c6"
                  }}
                  style={styles.ImageBackground_815_1531}
                />
                <View style={styles.View_815_1532}>
                  <Text style={styles.Text_815_1532}>hehe</Text>
                </View>
              </View>
              <View style={styles.View_815_1533}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9483869-79c8-4051-ab51-5112119368da"
                  }}
                  style={styles.ImageBackground_815_1534}
                />
                <View style={styles.View_815_1535}>
                  <Text style={styles.Text_815_1535}>huhu</Text>
                </View>
              </View>
              <View style={styles.View_815_1536}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/456dc2f3-9fee-42ef-ae77-8147bca423dd"
                  }}
                  style={styles.ImageBackground_815_1537}
                />
                <View style={styles.View_815_1538}>
                  <Text style={styles.Text_815_1538}>haha</Text>
                </View>
              </View>
              <View style={styles.View_815_1539}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/991fb532-fd34-4671-a7af-ec19d7a464be"
                  }}
                  style={styles.ImageBackground_815_1540}
                />
                <View style={styles.View_815_1541}>
                  <Text style={styles.Text_815_1541}>hihi</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_815_1542}>
        <View style={styles.View_815_1543}>
          <View style={styles.View_815_1544}>
            <View style={styles.View_815_1545} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb48331b-54cc-4a7d-bc5f-99a7cc1ca6b0"
              }}
              style={styles.ImageBackground_815_1546}
            />
          </View>
          <View style={styles.View_815_1547} />
        </View>
        <View style={styles.View_815_1550}>
          <View style={styles.View_815_1551}>
            <View style={styles.View_815_1552}>
              <View style={styles.View_815_1553}>
                <Text style={styles.Text_815_1553}>Admin</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0d1cbe2-5c96-4158-9d8b-adbce960749b"
                }}
                style={styles.ImageBackground_815_1554}
              />
              <View style={styles.View_815_1557}>
                <Text style={styles.Text_815_1557}>Personal Achievements</Text>
              </View>
            </View>
            <View style={styles.View_815_1558}>
              <View style={styles.View_815_1559}>
                <View style={styles.View_815_1560}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74f86515-9e93-43b8-b3de-19e21ae8a7ad"
                    }}
                    style={styles.ImageBackground_815_1561}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae29d5f1-3c6c-4511-a92f-b80a450b29f6"
                    }}
                    style={styles.ImageBackground_815_1565}
                  />
                </View>
                <View style={styles.View_815_1566}>
                  <View style={styles.View_815_1567}>
                    <Text style={styles.Text_815_1567}>VNUK hehe</Text>
                  </View>
                  <View style={styles.View_815_1568}>
                    <Text style={styles.Text_815_1568}>
                      Lorem ipsum dolor sit amet, consectetur.
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_815_1569}>
                <View style={styles.View_815_1570}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e349739a-e577-44df-a828-9a5096e53096"
                    }}
                    style={styles.ImageBackground_815_1571}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b89460e-16b6-47f9-ba8d-9bc36c6f904d"
                    }}
                    style={styles.ImageBackground_815_1614}
                  />
                </View>
                <View style={styles.View_815_1615}>
                  <View style={styles.View_815_1616}>
                    <Text style={styles.Text_815_1616}>Qua tuyet voi</Text>
                  </View>
                  <View style={styles.View_815_1617}>
                    <Text style={styles.Text_815_1617}>
                      Lorem ipsum dolor sit amet, consectetur.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_815_1618}>
              <View style={styles.View_815_1619}>
                <View style={styles.View_815_1620}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39a3bce8-3e8b-417d-9fae-7a2512f9f8e6"
                    }}
                    style={styles.ImageBackground_815_1621}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7eff308a-378d-40d4-a874-582afa190b4c"
                    }}
                    style={styles.ImageBackground_815_1664}
                  />
                </View>
                <View style={styles.View_815_1665}>
                  <View style={styles.View_815_1666}>
                    <Text style={styles.Text_815_1666}>Mon Chi Thao hehe</Text>
                  </View>
                  <View style={styles.View_815_1667}>
                    <Text style={styles.Text_815_1667}>
                      Lorem ipsum dolor sit amet, consectetur.
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_815_1668}>
                <View style={styles.View_815_1669}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d5ba924-4aad-4d89-991f-947942312c5e"
                    }}
                    style={styles.ImageBackground_815_1670}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/834e16c2-12f7-48f7-bf5b-fcac30f444e5"
                    }}
                    style={styles.ImageBackground_815_1674}
                  />
                </View>
                <View style={styles.View_815_1675}>
                  <View style={styles.View_815_1676}>
                    <Text style={styles.Text_815_1676}>Look Sus</Text>
                  </View>
                  <View style={styles.View_815_1677}>
                    <Text style={styles.Text_815_1677}>
                      Lorem ipsum dolor sit amet, consectetur.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_815_1678}>
            <View style={styles.View_815_1679}>
              <View style={styles.View_815_1680} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a17407b-5304-4da1-8395-aa7aea54379a"
                }}
                style={styles.ImageBackground_815_1681}
              />
            </View>
            <View style={styles.View_815_1682} />
          </View>
        </View>
      </View>
      <View style={styles.View_815_1683}>
        <View style={styles.View_815_1684}>
          <View style={styles.View_815_1685}>
            <View style={styles.View_815_1686} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7be2e73-f56c-49ef-a114-706cd940876f"
              }}
              style={styles.ImageBackground_815_1687}
            />
          </View>
          <View style={styles.View_815_1688} />
        </View>
        <View style={styles.View_815_1691}>
          <View style={styles.View_815_1692}>
            <View style={styles.View_815_1693}>
              <View style={styles.View_815_1694}>
                <View style={styles.View_815_1695}>
                  <View style={styles.View_815_1696}>
                    <Text style={styles.Text_815_1696}>Contact Us</Text>
                  </View>
                  <View style={styles.View_815_1697}>
                    <View style={styles.View_815_1698}>
                      <Text style={styles.Text_815_1698}>
                        31 W 10rd St, New Fork, NYC 3110, SUS
                      </Text>
                    </View>
                    <View style={styles.View_815_1699}>
                      <Text style={styles.Text_815_1699}>+1 2345 678 JQK</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_815_1700}>
                  <View style={styles.View_815_1701}>
                    <Text style={styles.Text_815_1701}>Working Hours</Text>
                  </View>
                  <View style={styles.View_815_1702}>
                    <View style={styles.View_815_1703}>
                      <Text style={styles.Text_815_1703}>
                        Monday-Friday: 08:00 am -12:00 am
                      </Text>
                    </View>
                    <View style={styles.View_815_1704}>
                      <Text style={styles.Text_815_1704}>
                        Saturday-Sunday: 07:00am -11:00 pm
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_815_1705}>
                <View style={styles.View_815_1706}>
                  <Text style={styles.Text_815_1706}>Bon Appetit Voyage</Text>
                </View>
                <View style={styles.View_815_1707}>
                  <View style={styles.View_815_1708}>
                    <View style={styles.View_815_1709}>
                      <Text style={styles.Text_815_1709}>
                        “”Food always feels like luxury when you’re hungry.
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b38a62b9-2c69-4972-9eac-69da3c1fa472"
                      }}
                      style={styles.ImageBackground_815_1710}
                    />
                    <View style={styles.View_815_1713}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c99ca62-1fed-4422-81c5-4b8f518c9d0e"
                        }}
                        style={styles.ImageBackground_815_1714}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e282a95e-eaae-439a-87ad-4afb20921056"
                        }}
                        style={styles.ImageBackground_815_1716}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/022a7af7-c4de-4e56-a760-35e769cf828f"
                        }}
                        style={styles.ImageBackground_815_1718}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_815_1720}>
              <View style={styles.View_815_1721}>
                <Text style={styles.Text_815_1721}>
                  2022 Bon Appetit Voyage. All Wrongs reserved.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_815_1722}>
            <View style={styles.View_815_1723}>
              <View style={styles.View_815_1724}>
                <View style={styles.View_815_1725}>
                  <Text style={styles.Text_815_1725}>Newsletter</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2adc055f-8174-463b-909c-d0d3809a74ee"
                  }}
                  style={styles.ImageBackground_815_1726}
                />
                <View style={styles.View_815_1729}>
                  <Text style={styles.Text_815_1729}>
                    Subscribe to Our Newsletter
                  </Text>
                </View>
              </View>
              <View style={styles.View_815_1730}>
                <Text style={styles.Text_815_1730}>
                  And never miss latest Updates!
                </Text>
              </View>
            </View>
            <View style={styles.View_815_1731}>
              <View style={styles.View_815_1732}>
                <View style={styles.View_815_1733} />
                <View style={styles.View_815_1734}>
                  <View style={styles.View_815_1735}>
                    <Text style={styles.Text_815_1735}>Email Address</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_815_1736}>
                <View style={styles.View_815_1737}>
                  <Text style={styles.Text_815_1737}>Subscribe</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_815_1738}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e4bda61-1a52-41ac-86a9-b1a0cd3e430a"
              }}
              style={styles.ImageBackground_815_1740}
            />
            <View style={styles.View_815_1741}>
              <Text style={styles.Text_815_1741}>Top</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_815_1742}>
        <View style={styles.View_815_1743}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50b9cc6d-c6bf-4c0f-81bd-1822b4899828"
            }}
            style={styles.ImageBackground_815_1744}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b69c2a6-708f-4387-8129-5c6f20b620f4"
            }}
            style={styles.ImageBackground_815_1747}
          />
        </View>
        <View style={styles.View_815_1766}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1684b2ca-6196-4fed-a137-9f681cefb712"
            }}
            style={styles.ImageBackground_815_1767}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/711a14ea-eff3-4440-8f53-079c5b88dbd2"
            }}
            style={styles.ImageBackground_815_1770}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(12, 12, 12, 1)" },
  View_2: { height: hp("522%") },
  View_815_1487: {
    width: wp("163%"),
    minWidth: wp("163%"),
    height: hp("2037%"),
    minHeight: hp("2037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-55%"),
    top: hp("152%")
  },
  ImageBackground_815_1488: {
    width: wp("106%"),
    height: hp("370%"),
    top: hp("1468%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_815_1489: {
    width: wp("116%"),
    minWidth: wp("116%"),
    height: hp("2037%"),
    minHeight: hp("2037%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%")
  },
  ImageBackground_815_1490: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("1461%"),
    minHeight: hp("1461%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  View_815_1491: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1492: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1493: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1494: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1495: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1495: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.76,
    textTransform: "uppercase"
  },
  View_815_1496: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_815_1497: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1497: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1498: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1498: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1499: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1499: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1500: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1500: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1501: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("93%"),
    minHeight: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%")
  },
  View_815_1502: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("93%"),
    minHeight: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1503: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("93%"),
    minHeight: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_1504: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("93%"),
    minHeight: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_815_1505: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("175%"),
    minHeight: hp("175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-54%"),
    resizeMode: "cover"
  },
  View_815_1506: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("93%"),
    minHeight: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(12, 12, 12, 1)"
  },
  View_815_1507: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1508: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1508: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 72,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 3.6,
    textTransform: "capitalize"
  },
  View_815_1509: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1510: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1510: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_1511: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_815_1513: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1513: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_1514: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("109%"),
    minHeight: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("130%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1515: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("109%"),
    minHeight: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1516: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("109%"),
    minHeight: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1517: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("109%"),
    minHeight: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_1518: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("109%"),
    minHeight: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_1519: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("109%"),
    minHeight: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 1
  },
  View_815_1520: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1521: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1522: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1522: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_1523: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_815_1526: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_815_1526: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  View_815_1527: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1528: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1528: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1529: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1530: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_815_1531: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_815_1532: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1532: {
    color: "rgba(245, 239, 219, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "capitalize"
  },
  View_815_1533: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_815_1534: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_815_1535: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1535: {
    color: "rgba(245, 239, 219, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "capitalize"
  },
  View_815_1536: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_815_1537: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_815_1538: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1538: {
    color: "rgba(245, 239, 219, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "capitalize"
  },
  View_815_1539: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_815_1540: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_815_1541: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1541: {
    color: "rgba(245, 239, 219, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "capitalize"
  },
  View_815_1542: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("97%"),
    minHeight: hp("97%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("260%")
  },
  View_815_1543: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("97%"),
    minHeight: hp("97%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_815_1544: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("143%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1545: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("143%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(4, 4, 4, 1)"
  },
  ImageBackground_815_1546: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("143%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_1547: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("143%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(4, 4, 4, 1)"
  },
  View_815_1550: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1551: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1552: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1553: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1553: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_1554: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_815_1557: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_815_1557: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  View_815_1558: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1559: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1560: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_815_1561: {
    width: wp("4%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_815_1565: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  View_815_1566: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1567: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1567: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_1568: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_815_1568: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1569: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1570: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_815_1571: {
    width: wp("4%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_815_1614: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  View_815_1615: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1616: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1616: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_1617: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_815_1617: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1618: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1619: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1620: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_815_1621: {
    width: wp("4%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_815_1664: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  View_815_1665: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1666: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1666: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_1667: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_815_1667: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1668: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1669: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_815_1670: {
    width: wp("4%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_815_1674: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  View_815_1675: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1676: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1676: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_1677: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_815_1677: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1678: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%")
  },
  View_815_1679: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1680: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_1681: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1682: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 1
  },
  View_815_1683: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("145%"),
    minHeight: hp("145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("378%")
  },
  View_815_1684: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("114%"),
    minHeight: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_815_1685: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("114%"),
    minHeight: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1686: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("114%"),
    minHeight: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(4, 4, 4, 1)"
  },
  ImageBackground_815_1687: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("114%"),
    minHeight: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_1688: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("114%"),
    minHeight: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(4, 4, 4, 1)"
  },
  View_815_1691: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("124%"),
    minHeight: hp("124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_815_1692: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("78%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1693: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%")
  },
  View_815_1694: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1695: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1696: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1696: {
    color: "rgba(245, 239, 219, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_1697: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1698: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1698: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1699: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_815_1699: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1700: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1701: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1701: {
    color: "rgba(245, 239, 219, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_1702: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1703: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1703: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1704: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_815_1704: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1705: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1706: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1706: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.76,
    textTransform: "uppercase"
  },
  View_815_1707: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1708: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1709: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1709: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  ImageBackground_815_1710: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_815_1713: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_815_1714: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_815_1716: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_815_1718: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_815_1720: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1721: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_815_1721: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1722: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    backgroundColor: "rgba(12, 12, 12, 1)"
  },
  View_815_1723: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1724: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1725: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1725: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_1726: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_815_1729: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_815_1729: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  View_815_1730: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_815_1730: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1731: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1732: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1733: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(245, 239, 219, 1)",
    borderWidth: 1
  },
  View_815_1734: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1735: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1735: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "capitalize"
  },
  View_815_1736: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("1%"),
    backgroundColor: "rgba(220, 202, 135, 1)"
  },
  View_815_1737: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_815_1737: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1738: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("54%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_815_1740: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_815_1741: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_815_1741: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "uppercase"
  },
  View_815_1742: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("156%"),
    minHeight: hp("156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("230%")
  },
  View_815_1743: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("136%")
  },
  ImageBackground_815_1744: {
    width: wp("3%"),
    height: hp("9%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_815_1747: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1766: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("0%")
  },
  ImageBackground_815_1767: {
    width: wp("3%"),
    height: hp("9%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_815_1770: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
