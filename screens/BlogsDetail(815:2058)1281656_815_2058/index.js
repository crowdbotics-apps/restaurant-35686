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
      <View style={styles.View_815_2059}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15736e87-ca51-4d22-9417-1d2a6026f769"
          }}
          style={styles.ImageBackground_815_2060}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4e40e89-bf7d-4813-b525-f8c51da169db"
          }}
          style={styles.ImageBackground_815_2061}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cccd48b9-a710-4947-8b37-a5f46476a927"
          }}
          style={styles.ImageBackground_815_2062}
        />
      </View>
      <View style={styles.View_815_2063}>
        <View style={styles.View_815_2064}>
          <View style={styles.View_815_2065} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c9d9f9e-0f54-4eaa-ae59-e23cd9657398"
            }}
            style={styles.ImageBackground_815_2066}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0d341d2-a070-447a-9d8f-ae0d5cb96825"
            }}
            style={styles.ImageBackground_815_2067}
          />
        </View>
        <View style={styles.View_815_2068} />
        <View style={styles.View_815_2069}>
          <View style={styles.View_815_2070}>
            <Text style={styles.Text_815_2070}>Our Blogs</Text>
          </View>
          <View style={styles.View_815_2071}>
            <View style={styles.View_815_2072}>
              <Text style={styles.Text_815_2072}>Home</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d41ce216-e0fc-4489-9acc-ee1b675d99b9"
              }}
              style={styles.ImageBackground_815_2073}
            />
            <View style={styles.View_815_2075}>
              <Text style={styles.Text_815_2075}>Our Blogs- grid</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aecb843c-e139-467a-a9d9-18abdaa48975"
              }}
              style={styles.ImageBackground_815_2076}
            />
            <View style={styles.View_815_2078}>
              <Text style={styles.Text_815_2078}>Cooking Tips</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe66e4ec-b830-4f61-a520-300a4106cfc1"
              }}
              style={styles.ImageBackground_815_2079}
            />
            <View style={styles.View_815_2081}>
              <Text style={styles.Text_815_2081}>
                Tips for Prepping and Caring for your grill
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_815_2082}>
        <View style={styles.View_815_2083}>
          <View style={styles.View_815_2084}>
            <Text style={styles.Text_815_2084}>Comment(3)</Text>
          </View>
        </View>
        <View style={styles.View_815_2085}>
          <View style={styles.View_815_2086}>
            <View style={styles.View_815_2087} />
            <View style={styles.View_815_2088}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81c9b839-7fba-48a3-877c-9a36c13f8573"
                }}
                style={styles.ImageBackground_815_2089}
              />
              <View style={styles.View_815_2090}>
                <View style={styles.View_815_2091}>
                  <View style={styles.View_815_2092}>
                    <Text style={styles.Text_815_2092}>Amogus</Text>
                  </View>
                  <View style={styles.View_815_2093}>
                    <Text style={styles.Text_815_2093}>Reply</Text>
                  </View>
                </View>
                <View style={styles.View_815_2094}>
                  <Text style={styles.Text_815_2094}>01 Dec 2020</Text>
                </View>
                <View style={styles.View_815_2095}>
                  <Text style={styles.Text_815_2095}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam ut eu morbi tincidunt erat egestas quisque ultrices
                    ut. Vel elementum blandit et tellus sit tincidunt nulla non
                    tincidunt.
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_815_2096}>
            <View style={styles.View_815_2097} />
            <View style={styles.View_815_2098}>
              <View style={styles.View_815_2099}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b41e869b-c675-43e2-b823-971f9e36e5b7"
                  }}
                  style={styles.ImageBackground_815_2100}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50a31ca7-6836-40c6-aa17-1b014e3a9683"
                  }}
                  style={styles.ImageBackground_815_2101}
                />
              </View>
              <View style={styles.View_815_2102}>
                <View style={styles.View_815_2103}>
                  <View style={styles.View_815_2104}>
                    <Text style={styles.Text_815_2104}>Haiten Kat</Text>
                  </View>
                  <View style={styles.View_815_2105}>
                    <Text style={styles.Text_815_2105}>Reply</Text>
                  </View>
                </View>
                <View style={styles.View_815_2106}>
                  <Text style={styles.Text_815_2106}>05 Dec 2020</Text>
                </View>
                <View style={styles.View_815_2107}>
                  <Text style={styles.Text_815_2107}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam ut eu morbi tincidunt erat egestas quisque ultrices
                    ut. Vel elementum blandit et tellus sit tincidunt nulla non
                    tincidunt.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_815_2108}>
          <View style={styles.View_815_2109}>
            <View style={styles.View_815_2110}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80a49ca1-3df4-4a23-903b-065b27e29234"
                }}
                style={styles.ImageBackground_815_2111}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11729fb6-b7d7-4179-916e-2ce1d4e36766"
                }}
                style={styles.ImageBackground_815_2112}
              />
            </View>
            <View style={styles.View_815_2113}>
              <View style={styles.View_815_2114}>
                <View style={styles.View_815_2115}>
                  <Text style={styles.Text_815_2115}>Pepe the Joker</Text>
                </View>
                <View style={styles.View_815_2116}>
                  <Text style={styles.Text_815_2116}>Reply</Text>
                </View>
              </View>
              <View style={styles.View_815_2117}>
                <Text style={styles.Text_815_2117}>05 Dec 2020</Text>
              </View>
              <View style={styles.View_815_2118}>
                <Text style={styles.Text_815_2118}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam ut eu morbi tincidunt erat egestas quisque ultrices
                  ut.
                </Text>
              </View>
              <View style={styles.View_815_2119}>
                <View style={styles.View_815_2120}>
                  <Text style={styles.Text_815_2120}>
                    Reply to Pepe The Joker
                  </Text>
                </View>
                <View style={styles.View_815_2121}>
                  <Text style={styles.Text_815_2121}>Cancel Reply</Text>
                </View>
              </View>
              <View style={styles.View_815_2122}>
                <View style={styles.View_815_2123} />
                <View style={styles.View_815_2124}>
                  <View style={styles.View_815_2125}>
                    <Text style={styles.Text_815_2125}>
                      Hi there! I love your Comment....
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_815_2126}>
                <View style={styles.View_815_2127}>
                  <Text style={styles.Text_815_2127}>Reply</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_815_2128}>
        <View style={styles.View_815_2129}>
          <Text style={styles.Text_815_2129}>Post a Comment</Text>
        </View>
        <View style={styles.View_815_2130}>
          <View style={styles.View_815_2131}>
            <View style={styles.View_815_2132} />
            <View style={styles.View_815_2133}>
              <View style={styles.View_815_2134}>
                <Text style={styles.Text_815_2134}>
                  Hello There, My message...
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_815_2135}>
            <View style={styles.View_815_2136}>
              <View style={styles.View_815_2137} />
              <View style={styles.View_815_2138}>
                <View style={styles.View_815_2139}>
                  <Text style={styles.Text_815_2139}>First Name</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_815_2140}>
              <View style={styles.View_815_2141} />
              <View style={styles.View_815_2142}>
                <View style={styles.View_815_2143}>
                  <Text style={styles.Text_815_2143}>Last Name</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_815_2144}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2297ba9-bcea-4587-bdb4-eb426555f763"
              }}
              style={styles.ImageBackground_815_2150}
            />
            <View style={styles.View_815_2153}>
              <Text style={styles.Text_815_2153}>
                Save my name and email in this browser for the next time I
                comment.
              </Text>
            </View>
          </View>
          <View style={styles.View_815_2154}>
            <View style={styles.View_815_2155}>
              <Text style={styles.Text_815_2155}>Comment</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_815_2156}>
        <View style={styles.View_815_2157}>
          <View style={styles.View_815_2158}>
            <View style={styles.View_815_2159}>
              <View style={styles.View_815_2160}>
                <Text style={styles.Text_815_2160}>31 Oct 2022</Text>
              </View>
              <View style={styles.View_815_2161}>
                <Text style={styles.Text_815_2161}>Vy Pham</Text>
              </View>
            </View>
            <View style={styles.View_815_2162}>
              <Text style={styles.Text_815_2162}>
                tips for prepping and caring for your grill
              </Text>
            </View>
          </View>
          <View style={styles.View_815_2163}>
            <View style={styles.View_815_2164}>
              <View style={styles.View_815_2165} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bcd7f344-c410-4e6f-9b0d-5948613fb2e2"
                }}
                style={styles.ImageBackground_815_2166}
              />
            </View>
            <View style={styles.View_815_2167} />
          </View>
        </View>
        <View style={styles.View_815_2168}>
          <View style={styles.View_815_2169}>
            <View style={styles.View_815_2170}>
              <View style={styles.View_815_2171}>
                <Text style={styles.Text_815_2171}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a
                  egestas penatibus pretium quis lorem. Purus morbi sagittis,
                  faucibus odio. Elementum felis nibh at purus consectetur
                  phasellus lacus, pellentesque dictumst. Pellentesque eu
                  malesuada id vitae risus, libero. Ullamcorper turpis blandit
                  faucibus turpis. Eu elit faucibus leo eget.
                </Text>
              </View>
              <View style={styles.View_815_2172}>
                <View style={styles.View_815_2173}>
                  <Text style={styles.Text_815_2173}>
                    How to prepare your grill
                  </Text>
                </View>
                <View style={styles.View_815_2174}>
                  <Text style={styles.Text_815_2174}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt pharetra ut lobortis id. Commodo sit libero lacus
                    a egestas penatibus pretium quis lorem. Purus morbi
                    sagittis, faucibus odio.
                  </Text>
                </View>
                <View style={styles.View_815_2175}>
                  <View style={styles.View_815_2176}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab8771a6-1778-470b-bcdd-f3be032c6736"
                      }}
                      style={styles.ImageBackground_815_2177}
                    />
                    <View style={styles.View_815_2178}>
                      <Text style={styles.Text_815_2178}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_815_2179}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9874263c-d4e8-41ad-bd8e-93d90d4bed65"
                      }}
                      style={styles.ImageBackground_815_2180}
                    />
                    <View style={styles.View_815_2181}>
                      <Text style={styles.Text_815_2181}>
                        {" "}
                        Tincidunt pharetra ut lobortis id.
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_815_2182}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a221ef29-d849-4423-a489-28a4a57fb8bc"
                      }}
                      style={styles.ImageBackground_815_2183}
                    />
                    <View style={styles.View_815_2184}>
                      <Text style={styles.Text_815_2184}>
                        Commodo sit libero lacus a egestas penatibus pretium
                        quis lorem.{" "}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_815_2191}>
                <View style={styles.View_815_2192}>
                  <View style={styles.View_815_2193} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7db6b1eb-6ef5-4fae-a0c9-9623b37fdabd"
                    }}
                    style={styles.ImageBackground_815_2194}
                  />
                </View>
                <View style={styles.View_815_2195} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0fb7147d-f978-43ba-a651-e99ff0f74e12"
                  }}
                  style={styles.ImageBackground_815_2196}
                />
              </View>
              <View style={styles.View_815_2199}>
                <Text style={styles.Text_815_2199}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a
                  egestas penatibus pretium quis lorem. Purus morbi sagittis,
                  faucibus odio. Elementum felis nibh at purus consectetur
                  phasellus lacus, pellentesque dictumst. Pellentesque eu
                  malesuada id vitae risus, libero. Ullamcorper turpis blandit
                  faucibus turpis. Eu elit faucibus leo eget.
                </Text>
              </View>
              <View style={styles.View_815_2200}>
                <View style={styles.View_815_2201} />
                <View style={styles.View_815_2202}>
                  <View style={styles.View_815_2203} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13f34e94-a1da-4452-97a4-fc2b4ec0870e"
                    }}
                    style={styles.ImageBackground_815_2204}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1375442d-76ae-4f74-ab57-0d28891c3c5d"
                    }}
                    style={styles.ImageBackground_815_2205}
                  />
                </View>
                <View style={styles.View_815_2206}>
                  <Text style={styles.Text_815_2206}>
                    There is no love sincerer than the love of food.
                  </Text>
                </View>
              </View>
              <View style={styles.View_815_2207}>
                <View style={styles.View_815_2208}>
                  <View style={styles.View_815_2209}>
                    <Text style={styles.Text_815_2209}>
                      How to care for your grill
                    </Text>
                  </View>
                  <View style={styles.View_815_2210}>
                    <Text style={styles.Text_815_2210}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tin cidunt pharetra ut lobortis id. Commodo sit libero
                      lacus a egestas penatibus pretium quis lorem.
                    </Text>
                  </View>
                  <View style={styles.View_815_2211}>
                    <View style={styles.View_815_2212}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1786a125-4257-4fb8-a62d-8f4c0e5e2eef"
                        }}
                        style={styles.ImageBackground_815_2213}
                      />
                      <View style={styles.View_815_2214}>
                        <Text style={styles.Text_815_2214}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_815_2215}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6ff2b49-7fab-4c1f-a3fa-a2d5051a5abd"
                        }}
                        style={styles.ImageBackground_815_2216}
                      />
                      <View style={styles.View_815_2217}>
                        <Text style={styles.Text_815_2217}>
                          {" "}
                          Tincidunt pharetra ut lobortis id.
                        </Text>
                      </View>
                    </View>
                    <View style={styles.View_815_2218}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31896608-a7ae-469c-8d43-79449c46265f"
                        }}
                        style={styles.ImageBackground_815_2219}
                      />
                      <View style={styles.View_815_2220}>
                        <Text style={styles.Text_815_2220}>
                          Commodo sit libero lacus a egestas penatibus.
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_815_2227}>
                  <View style={styles.View_815_2228} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8561fc1-9ca4-4e75-b38e-f93977e6d2f3"
                    }}
                    style={styles.ImageBackground_815_2229}
                  />
                </View>
              </View>
              <View style={styles.View_815_2230}>
                <Text style={styles.Text_815_2230}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a
                  egestas penatibus pretium quis lorem. Purus morbi sagittis,
                  faucibus odio.
                </Text>
              </View>
            </View>
            <View style={styles.View_815_2231}>
              <View style={styles.View_815_2232}>
                <View style={styles.View_815_2233}>
                  <Text style={styles.Text_815_2233}>#Grilling</Text>
                </View>
                <View style={styles.View_815_2234}>
                  <Text style={styles.Text_815_2234}>#Outdoors</Text>
                </View>
                <View style={styles.View_815_2235}>
                  <Text style={styles.Text_815_2235}>#Cooking</Text>
                </View>
              </View>
              <View style={styles.View_815_2236}>
                <View style={styles.View_815_2237}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6530eef-aa37-4135-8cca-1ba51d18baf9"
                    }}
                    style={styles.ImageBackground_815_2238}
                  />
                  <View style={styles.View_815_2241}>
                    <Text style={styles.Text_815_2241}>Comment</Text>
                  </View>
                </View>
                <View style={styles.View_815_2242}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aabd884d-f285-4d77-8021-f4631350a79f"
                    }}
                    style={styles.ImageBackground_815_2243}
                  />
                  <View style={styles.View_815_2246}>
                    <Text style={styles.Text_815_2246}>Like</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_815_2247}>
            <View style={styles.View_815_2248}>
              <View style={styles.View_815_2249}>
                <View style={styles.View_815_2250}>
                  <Text style={styles.Text_815_2250}>Search Page</Text>
                </View>
              </View>
              <View style={styles.View_815_2252}>
                <View style={styles.View_815_2253}>
                  <View style={styles.View_815_2254}>
                    <Text style={styles.Text_815_2254}>Example</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6b39627-4bea-4849-8ac0-c10e70b860e4"
                    }}
                    style={styles.ImageBackground_815_2255}
                  />
                </View>
                <View style={styles.View_815_2257} />
              </View>
            </View>
            <View style={styles.View_815_2258}>
              <View style={styles.View_815_2259}>
                <View style={styles.View_815_2260}>
                  <Text style={styles.Text_815_2260}>All Categories</Text>
                </View>
              </View>
              <View style={styles.View_815_2262}>
                <View style={styles.View_815_2263}>
                  <View style={styles.View_815_2264}>
                    <Text style={styles.Text_815_2264}>Photography</Text>
                  </View>
                  <View style={styles.View_815_2265} />
                  <View style={styles.View_815_2266}>
                    <Text style={styles.Text_815_2266}>(1)</Text>
                  </View>
                </View>
                <View style={styles.View_815_2267}>
                  <View style={styles.View_815_2268}>
                    <Text style={styles.Text_815_2268}>Baking</Text>
                  </View>
                  <View style={styles.View_815_2269} />
                  <View style={styles.View_815_2270}>
                    <Text style={styles.Text_815_2270}>(2)</Text>
                  </View>
                </View>
                <View style={styles.View_815_2271}>
                  <View style={styles.View_815_2272}>
                    <Text style={styles.Text_815_2272}>Cooking Tips</Text>
                  </View>
                  <View style={styles.View_815_2273} />
                  <View style={styles.View_815_2274}>
                    <Text style={styles.Text_815_2274}>(6)</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_815_2275}>
              <View style={styles.View_815_2276}>
                <View style={styles.View_815_2277}>
                  <Text style={styles.Text_815_2277}>Our Latest Posts</Text>
                </View>
              </View>
              <View style={styles.View_815_2278}>
                <View style={styles.View_815_2279} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70617ef5-87e3-47fa-b471-9b99b3173f4e"
                  }}
                  style={styles.ImageBackground_815_2280}
                />
              </View>
              <View style={styles.View_815_2281}>
                <View style={styles.View_815_2282}>
                  <View style={styles.View_815_2283}>
                    <Text style={styles.Text_815_2283}>23 May 2021</Text>
                  </View>
                  <View style={styles.View_815_2284}>
                    <Text style={styles.Text_815_2284}>-John Micheal</Text>
                  </View>
                </View>
                <View style={styles.View_815_2285}>
                  <Text style={styles.Text_815_2285}>
                    summer cocktails and mocktails
                  </Text>
                </View>
                <View style={styles.View_815_2286}>
                  <Text style={styles.Text_815_2286}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Volutpat mattis ipsum turpis elit....
                  </Text>
                </View>
                <View style={styles.View_815_2290}>
                  <Text style={styles.Text_815_2290}>Read More</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_815_2291}>
              <View style={styles.View_815_2292}>
                <View style={styles.View_815_2293}>
                  <Text style={styles.Text_815_2293}>Related Tags</Text>
                </View>
              </View>
              <View style={styles.View_815_2294}>
                <View style={styles.View_815_2295}>
                  <View style={styles.View_815_2296}>
                    <Text style={styles.Text_815_2296}>Grilling</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32356f5f-d2f9-4ca5-82c2-af8ac9a23a48"
                    }}
                    style={styles.ImageBackground_815_2297}
                  />
                  <View style={styles.View_815_2298}>
                    <Text style={styles.Text_815_2298}>Cooking</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d44174fa-cda9-4aac-8864-7984d9744e43"
                    }}
                    style={styles.ImageBackground_815_2299}
                  />
                  <View style={styles.View_815_2300}>
                    <Text style={styles.Text_815_2300}>Baking</Text>
                  </View>
                </View>
                <View style={styles.View_815_2301}>
                  <View style={styles.View_815_2302}>
                    <Text style={styles.Text_815_2302}>Cuisines</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb061e37-2034-4f40-aa79-d664796673ab"
                    }}
                    style={styles.ImageBackground_815_2303}
                  />
                  <View style={styles.View_815_2304}>
                    <Text style={styles.Text_815_2304}>Chef</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2ae6409-1b91-411b-a211-c23614db0bc1"
                    }}
                    style={styles.ImageBackground_815_2305}
                  />
                  <View style={styles.View_815_2306}>
                    <Text style={styles.Text_815_2306}>Alcohol Mixing</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_815_2307}>
              <View style={styles.View_815_2308}>
                <Text style={styles.Text_815_2308}>Share</Text>
              </View>
              <View style={styles.View_815_2309}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9fe74a47-e316-46e7-8b0e-b2fb30b5e4c2"
                  }}
                  style={styles.ImageBackground_815_2310}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d2e2295-a118-4114-b11b-9465cd8dfb68"
                  }}
                  style={styles.ImageBackground_815_2312}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1bbca85-37fd-42e9-acf9-efb3b12fdb86"
                  }}
                  style={styles.ImageBackground_815_2314}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_815_2316}>
        <View style={styles.View_815_2317}>
          <View style={styles.View_815_2318}>
            <View style={styles.View_815_2319} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f287235-3f42-4ce2-894d-de67a15a4b76"
              }}
              style={styles.ImageBackground_815_2320}
            />
          </View>
          <View style={styles.View_815_2321} />
        </View>
        <View style={styles.View_815_2324}>
          <View style={styles.View_815_2325}>
            <View style={styles.View_815_2326}>
              <View style={styles.View_815_2327}>
                <View style={styles.View_815_2328}>
                  <View style={styles.View_815_2329}>
                    <Text style={styles.Text_815_2329}>Contact Us</Text>
                  </View>
                  <View style={styles.View_815_2330}>
                    <View style={styles.View_815_2331}>
                      <Text style={styles.Text_815_2331}>
                        31 W 10rd St, New Fork, NYC 3110, SUS
                      </Text>
                    </View>
                    <View style={styles.View_815_2332}>
                      <Text style={styles.Text_815_2332}>+1 2345 678 JQK</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_815_2333}>
                  <View style={styles.View_815_2334}>
                    <Text style={styles.Text_815_2334}>Working Hours</Text>
                  </View>
                  <View style={styles.View_815_2335}>
                    <View style={styles.View_815_2336}>
                      <Text style={styles.Text_815_2336}>
                        Monday-Friday: 08:00 am -12:00 am
                      </Text>
                    </View>
                    <View style={styles.View_815_2337}>
                      <Text style={styles.Text_815_2337}>
                        Saturday-Sunday: 07:00am -11:00 pm
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_815_2338}>
                <View style={styles.View_815_2339}>
                  <Text style={styles.Text_815_2339}>Bon Appetit Voyage</Text>
                </View>
                <View style={styles.View_815_2340}>
                  <View style={styles.View_815_2341}>
                    <View style={styles.View_815_2342}>
                      <Text style={styles.Text_815_2342}>
                        “Let food be thy medicine and medicine be thy food.”
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a51e3af1-6434-4860-bc7e-fb0988ca4d24"
                      }}
                      style={styles.ImageBackground_815_2343}
                    />
                    <View style={styles.View_815_2346}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ba4802a-09ef-4204-a9db-25f9c9459f41"
                        }}
                        style={styles.ImageBackground_815_2347}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91be9e9a-604b-4fc5-930b-0b49d214bbbf"
                        }}
                        style={styles.ImageBackground_815_2349}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efd1d4fa-deaf-4e23-b79a-325f841b7c22"
                        }}
                        style={styles.ImageBackground_815_2351}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_815_2353}>
              <View style={styles.View_815_2354}>
                <Text style={styles.Text_815_2354}>
                  2022 Bon Appetit Voyage. All Wrongs reserved.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_815_2355}>
            <View style={styles.View_815_2356}>
              <View style={styles.View_815_2357}>
                <View style={styles.View_815_2358}>
                  <Text style={styles.Text_815_2358}>Newsletter</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7c84e52-d481-4b97-9f5f-33f605881546"
                  }}
                  style={styles.ImageBackground_815_2359}
                />
                <View style={styles.View_815_2362}>
                  <Text style={styles.Text_815_2362}>
                    Subscribe to Our Newsletter
                  </Text>
                </View>
              </View>
              <View style={styles.View_815_2363}>
                <Text style={styles.Text_815_2363}>
                  And never miss latest Updates!
                </Text>
              </View>
            </View>
            <View style={styles.View_815_2364}>
              <View style={styles.View_815_2365}>
                <View style={styles.View_815_2366} />
                <View style={styles.View_815_2367}>
                  <View style={styles.View_815_2368}>
                    <Text style={styles.Text_815_2368}>Email Address</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_815_2369}>
                <View style={styles.View_815_2370}>
                  <Text style={styles.Text_815_2370}>Subscribe</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_815_2371}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f847d9d-d9dd-4386-9de6-79d225c1dccb"
              }}
              style={styles.ImageBackground_815_2373}
            />
            <View style={styles.View_815_2374}>
              <Text style={styles.Text_815_2374}>Top</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_815_2375}>
        <View style={styles.View_815_2376}>
          <View style={styles.View_815_2377}>
            <View style={styles.View_815_2378}>
              <View style={styles.View_815_2379}>
                <Text style={styles.Text_815_2379}>Bon Appetit Voyage</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_815_2380}>
          <TouchableOpacity
            style={styles.TouchableOpacity_815_2381}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("815_3"))
            }
          >
            <Text style={styles.Text_815_2381}>Home</Text>
          </TouchableOpacity>
          <View style={styles.View_815_2382}>
            <Text style={styles.Text_815_2382}>Contact Us</Text>
          </View>
          <View style={styles.View_815_2383}>
            <Text style={styles.Text_815_2383}>Blog</Text>
          </View>
          <View style={styles.View_815_2384}>
            <Text style={styles.Text_815_2384}>FAQ</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_815_2385}>
        <View style={styles.View_815_2386}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5535c12d-e24e-4110-b869-f9047c458558"
            }}
            style={styles.ImageBackground_815_2387}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36fce9f5-4c38-43f2-a865-33e65de1562f"
            }}
            style={styles.ImageBackground_815_2390}
          />
        </View>
        <View style={styles.View_815_2409}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e66ceb5-d7bc-4313-902b-9581516933fc"
            }}
            style={styles.ImageBackground_815_2410}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e92f8057-5133-4fb9-981b-63a034cb8139"
            }}
            style={styles.ImageBackground_815_2413}
          />
        </View>
        <View style={styles.View_815_2432}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e90f18d-9a2d-4181-833e-ec0faa588666"
            }}
            style={styles.ImageBackground_815_2433}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5c62032-de0d-4b61-908e-4fb465ff42cd"
            }}
            style={styles.ImageBackground_815_2436}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(12, 12, 12, 1)" },
  View_2: { height: hp("856%") },
  View_815_2059: {
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
  ImageBackground_815_2060: {
    width: wp("106%"),
    height: hp("370%"),
    top: hp("1468%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_815_2061: {
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
  ImageBackground_815_2062: {
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
  View_815_2063: {
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
  View_815_2064: {
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
  View_815_2065: {
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
  ImageBackground_815_2066: {
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
  ImageBackground_815_2067: {
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
  View_815_2068: {
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
  View_815_2069: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2070: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2070: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 72,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 3.6,
    textTransform: "capitalize"
  },
  View_815_2071: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2072: {
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
  Text_815_2072: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_2073: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_815_2075: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2075: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_2076: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_815_2078: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2078: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_2079: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_815_2081: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2081: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_2082: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("124%"),
    minHeight: hp("124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("478%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2083: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2084: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2084: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_2085: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2086: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_2087: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(36, 36, 36, 1)"
  },
  View_815_2088: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_815_2089: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_2090: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2091: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2092: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_815_2092: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_2093: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_815_2093: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2094: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_815_2094: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2095: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_815_2095: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2096: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%")
  },
  View_815_2097: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(36, 36, 36, 1)"
  },
  View_815_2098: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2099: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_815_2100: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_815_2101: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_2102: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2103: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2104: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_815_2104: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_2105: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_815_2105: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2106: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_815_2106: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2107: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_815_2107: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2108: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("69%")
  },
  View_815_2109: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2110: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_815_2111: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_815_2112: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_2113: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2114: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2115: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_815_2115: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_2116: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_815_2116: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2117: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_815_2117: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2118: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_815_2118: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2119: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2120: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_815_2120: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2121: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_815_2121: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2122: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%")
  },
  View_815_2123: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(245, 239, 219, 1)",
    borderWidth: 1
  },
  View_815_2124: {
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
  View_815_2125: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2125: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "capitalize"
  },
  View_815_2126: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49%"),
    backgroundColor: "rgba(220, 202, 135, 1)"
  },
  View_815_2127: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_815_2127: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2128: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("622%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2129: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2129: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_2130: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2131: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_2132: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(245, 239, 219, 1)",
    borderWidth: 1
  },
  View_815_2133: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2134: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2134: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "capitalize"
  },
  View_815_2135: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2136: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_2137: {
    width: wp("16%"),
    minWidth: wp("16%"),
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
  View_815_2138: {
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
  View_815_2139: {
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
  Text_815_2139: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "capitalize"
  },
  View_815_2140: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%")
  },
  View_815_2141: {
    width: wp("16%"),
    minWidth: wp("16%"),
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
  View_815_2142: {
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
  View_815_2143: {
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
  Text_815_2143: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "capitalize"
  },
  View_815_2144: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_815_2150: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_815_2153: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_815_2153: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2154: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51%"),
    backgroundColor: "rgba(220, 202, 135, 1)"
  },
  View_815_2155: {
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
  Text_815_2155: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2156: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("327%"),
    minHeight: hp("327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("130%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2157: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("83%"),
    minHeight: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2158: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2159: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2160: {
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
  Text_815_2160: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2161: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2161: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2162: {
    width: wp("62%"),
    minWidth: wp("62%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_815_2162: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  View_815_2163: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%")
  },
  View_815_2164: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_2165: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_2166: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_2167: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 1
  },
  View_815_2168: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("239%"),
    minHeight: hp("239%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("88%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2169: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("236%"),
    minHeight: hp("236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2170: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("225%"),
    minHeight: hp("225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2171: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2171: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2172: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2173: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2173: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_2174: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_815_2174: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2175: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2176: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_815_2177: {
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
  View_815_2178: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2178: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2179: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_815_2180: {
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
  View_815_2181: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2181: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2182: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_815_2183: {
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
  View_815_2184: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2184: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2191: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("65%")
  },
  View_815_2192: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_2193: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_2194: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_2195: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(12, 12, 12, 1)"
  },
  ImageBackground_815_2196: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("15%")
  },
  View_815_2199: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("117%"),
    justifyContent: "flex-start"
  },
  Text_815_2199: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2200: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("138%")
  },
  View_815_2201: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 84, 84, 1)",
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 1
  },
  View_815_2202: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_2203: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 84, 84, 1)"
  },
  ImageBackground_815_2204: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_815_2205: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("20%")
  },
  View_815_2206: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_815_2206: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_2207: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("169%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2208: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2209: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2209: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_2210: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_815_2210: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2211: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2212: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_815_2213: {
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
  View_815_2214: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2214: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2215: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_815_2216: {
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
  View_815_2217: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2217: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2218: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_815_2219: {
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
  View_815_2220: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2220: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2227: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%")
  },
  View_815_2228: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_2229: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_2230: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("217%"),
    justifyContent: "flex-start"
  },
  Text_815_2230: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2231: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("233%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2232: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2233: {
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
  Text_815_2233: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2234: {
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
  Text_815_2234: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2235: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2235: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2236: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2237: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_815_2238: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_815_2241: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2241: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2242: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_815_2243: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_815_2246: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2246: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2247: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("239%"),
    minHeight: hp("239%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2248: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(36, 36, 36, 1)"
  },
  View_815_2249: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2250: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2250: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_2252: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2253: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2254: {
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
  Text_815_2254: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  ImageBackground_815_2255: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_815_2257: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(170, 170, 170, 1)"
  },
  View_815_2258: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%"),
    backgroundColor: "rgba(36, 36, 36, 1)"
  },
  View_815_2259: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2260: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2260: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_2262: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2263: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2264: {
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
  Text_815_2264: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2265: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_815_2266: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2266: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2267: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2268: {
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
  Text_815_2268: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2269: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_815_2270: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2270: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2271: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2272: {
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
  Text_815_2272: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2273: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_815_2274: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2274: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2275: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("109%"),
    minHeight: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("70%"),
    backgroundColor: "rgba(36, 36, 36, 1)"
  },
  View_815_2276: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2277: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2277: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_2278: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%")
  },
  View_815_2279: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_2280: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_2281: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("61%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2282: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2283: {
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
  Text_815_2283: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2284: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2284: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2285: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_815_2285: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_2286: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_815_2286: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2290: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_815_2290: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2291: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("183%"),
    backgroundColor: "rgba(36, 36, 36, 1)"
  },
  View_815_2292: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2293: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2293: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_2294: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2295: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2296: {
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
  Text_815_2296: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  ImageBackground_815_2297: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  View_815_2298: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2298: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  ImageBackground_815_2299: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%")
  },
  View_815_2300: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2300: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2301: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2302: {
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
  Text_815_2302: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  ImageBackground_815_2303: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_815_2304: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2304: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  ImageBackground_815_2305: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%")
  },
  View_815_2306: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2306: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2307: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("217%"),
    backgroundColor: "rgba(36, 36, 36, 1)"
  },
  View_815_2308: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_815_2308: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_2309: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_815_2310: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_815_2312: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_815_2314: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_815_2316: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("145%"),
    minHeight: hp("145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("711%")
  },
  View_815_2317: {
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
  View_815_2318: {
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
  View_815_2319: {
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
  ImageBackground_815_2320: {
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
  View_815_2321: {
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
  View_815_2324: {
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
  View_815_2325: {
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
  View_815_2326: {
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
  View_815_2327: {
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
  View_815_2328: {
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
  View_815_2329: {
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
  Text_815_2329: {
    color: "rgba(245, 239, 219, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_2330: {
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
  View_815_2331: {
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
  Text_815_2331: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2332: {
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
  Text_815_2332: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2333: {
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
  View_815_2334: {
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
  Text_815_2334: {
    color: "rgba(245, 239, 219, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_2335: {
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
  View_815_2336: {
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
  Text_815_2336: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2337: {
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
  Text_815_2337: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2338: {
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
  View_815_2339: {
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
  Text_815_2339: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.76,
    textTransform: "uppercase"
  },
  View_815_2340: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2341: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_2342: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_2342: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  ImageBackground_815_2343: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_815_2346: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_815_2347: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_815_2349: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_815_2351: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_815_2353: {
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
  View_815_2354: {
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
  Text_815_2354: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2355: {
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
  View_815_2356: {
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
  View_815_2357: {
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
  View_815_2358: {
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
  Text_815_2358: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_2359: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_815_2362: {
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
  Text_815_2362: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  View_815_2363: {
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
  Text_815_2363: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2364: {
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
  View_815_2365: {
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
  View_815_2366: {
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
  View_815_2367: {
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
  View_815_2368: {
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
  Text_815_2368: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "capitalize"
  },
  View_815_2369: {
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
  View_815_2370: {
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
  Text_815_2370: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2371: {
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
  ImageBackground_815_2373: {
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
  View_815_2374: {
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
  Text_815_2374: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "uppercase"
  },
  View_815_2375: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_2376: {
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
  View_815_2377: {
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
  View_815_2378: {
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
  View_815_2379: {
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
  Text_815_2379: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.76,
    textTransform: "uppercase"
  },
  View_815_2380: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_815_2381: {
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
  Text_815_2381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2382: {
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
  Text_815_2382: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2383: {
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
  Text_815_2383: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2384: {
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
  Text_815_2384: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_2385: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("375%"),
    minHeight: hp("375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("285%")
  },
  View_815_2386: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("298%")
  },
  ImageBackground_815_2387: {
    width: wp("3%"),
    height: hp("9%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_815_2390: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_2409: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("0%")
  },
  ImageBackground_815_2410: {
    width: wp("3%"),
    height: hp("9%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_815_2413: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_2432: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("355%")
  },
  ImageBackground_815_2433: {
    width: wp("3%"),
    height: hp("9%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_815_2436: {
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
