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
      <View style={styles.View_815_934}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e29a538-4264-4cfc-b717-3fdc016564f9"
          }}
          style={styles.ImageBackground_815_935}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3dd4e666-11e4-4cf3-9124-8a4f6a76fa04"
          }}
          style={styles.ImageBackground_815_936}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d9fea81-73bf-4152-9a1a-444556e9dd3b"
          }}
          style={styles.ImageBackground_815_937}
        />
      </View>
      <View style={styles.View_815_938}>
        <View style={styles.View_815_939}>
          <View style={styles.View_815_940}>
            <View style={styles.View_815_941}>
              <View style={styles.View_815_942}>
                <Text style={styles.Text_815_942}>Bon Appetit Voyage</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_815_943}>
          <TouchableOpacity
            style={styles.TouchableOpacity_815_944}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("815_3"))
            }
          >
            <Text style={styles.Text_815_944}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_815_945}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("815_1318"))
            }
          >
            <Text style={styles.Text_815_945}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_815_946}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("815_1789"))
            }
          >
            <Text style={styles.Text_815_946}>Blog</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_815_947}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("815_2455"))
            }
          >
            <Text style={styles.Text_815_947}>FAQ</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_815_948}>
        <View style={styles.View_815_949}>
          <View style={styles.View_815_950} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59052290-8b01-4959-9840-180e1cc362ae"
            }}
            style={styles.ImageBackground_815_951}
          />
        </View>
        <View style={styles.View_815_953} />
        <View style={styles.View_815_954}>
          <View style={styles.View_815_955}>
            <Text style={styles.Text_815_955}>Bon Appetit Voyage</Text>
          </View>
          <View style={styles.View_815_956}>
            <View style={styles.View_815_957}>
              <Text style={styles.Text_815_957}>Home</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af4458d6-19ba-4d29-a53d-ac9331881229"
              }}
              style={styles.ImageBackground_815_958}
            />
            <View style={styles.View_815_960}>
              <Text style={styles.Text_815_960}>About Us</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_815_961}>
        <View style={styles.View_815_962}>
          <View style={styles.View_815_963}>
            <Text style={styles.Text_815_963}>Our Objectives</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f72d426-2927-4111-857d-654aec2a6ac9"
            }}
            style={styles.ImageBackground_815_964}
          />
          <View style={styles.View_815_967}>
            <Text style={styles.Text_815_967}>
              Bring readers Lively luxurious Experience
            </Text>
          </View>
        </View>
        <View style={styles.View_815_968}>
          <View style={styles.View_815_969}>
            <View style={styles.View_815_970}>
              <Text style={styles.Text_815_970}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                pharetra adipiscing ultrices vulputate posuere tristique. In sed
                odio nec aliquet eu proin mauris et.
              </Text>
            </View>
            <View style={styles.View_815_971}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/905e7c6d-2c55-4946-a113-4a9915fbb19d"
                }}
                style={styles.ImageBackground_815_972}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8906099d-49c2-4256-bcff-ae572c2e594d"
                }}
                style={styles.ImageBackground_815_973}
              />
            </View>
          </View>
          <View style={styles.View_815_974}>
            <View style={styles.View_815_975}>
              <View style={styles.View_815_976} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4faf063a-97a1-470b-8470-5e2f16bb2bfc"
                }}
                style={styles.ImageBackground_815_977}
              />
            </View>
            <View style={styles.View_815_978}>
              <View style={styles.View_815_979}>
                <Text style={styles.Text_815_979}>Over the years</Text>
              </View>
              <View style={styles.View_815_981}>
                <View style={styles.View_815_982}>
                  <View style={styles.View_815_983}>
                    <Text style={styles.Text_815_983}>320+</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/902a2627-94aa-42b8-9873-bcb041c1d7fd"
                    }}
                    style={styles.ImageBackground_815_984}
                  />
                  <View style={styles.View_815_987}>
                    <Text style={styles.Text_815_987}>F&amp;B Reviews</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2ffd79d-bbbc-49af-8ee5-b8271ff544b3"
                  }}
                  style={styles.ImageBackground_815_988}
                />
                <View style={styles.View_815_989}>
                  <View style={styles.View_815_990}>
                    <Text style={styles.Text_815_990}>50.000+</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38b5cac6-64d0-419b-a797-2ceb0b745e9d"
                    }}
                    style={styles.ImageBackground_815_991}
                  />
                  <View style={styles.View_815_994}>
                    <Text style={styles.Text_815_994}>Frequent Visitors</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bef2420e-6031-48c1-8907-2b2117d16503"
                  }}
                  style={styles.ImageBackground_815_995}
                />
                <View style={styles.View_815_996}>
                  <View style={styles.View_815_997}>
                    <Text style={styles.Text_815_997}>800+</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1bafd52f-2f54-4dea-9612-1ec38156bc41"
                    }}
                    style={styles.ImageBackground_815_998}
                  />
                  <View style={styles.View_815_1001}>
                    <Text style={styles.Text_815_1001}>Cuisine Locations</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_815_1002}>
        <View style={styles.View_815_1003}>
          <View style={styles.View_815_1004}>
            <View style={styles.View_815_1005} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3109912-ac28-4d8f-9473-42f140a8d8c5"
              }}
              style={styles.ImageBackground_815_1006}
            />
          </View>
          <View style={styles.View_815_1007} />
        </View>
        <View style={styles.View_815_1010}>
          <View style={styles.View_815_1011}>
            <View style={styles.View_815_1012} />
            <View style={styles.View_815_1013} />
            <View style={styles.View_815_1014}>
              <View style={styles.View_815_1015} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14aa954a-86ea-43f3-b350-ef43eae4e927"
                }}
                style={styles.ImageBackground_815_1016}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0a82e81-9ec3-4ef4-8afd-96f115e76c44"
                }}
                style={styles.ImageBackground_815_1017}
              />
            </View>
          </View>
          <View style={styles.View_815_1018}>
            <View style={styles.View_815_1019}>
              <View style={styles.View_815_1020}>
                <Text style={styles.Text_815_1020}>Blogger</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d568403a-80b3-4a19-a320-8cb90aa29f45"
                }}
                style={styles.ImageBackground_815_1021}
              />
              <View style={styles.View_815_1024}>
                <Text style={styles.Text_815_1024}>What we believe in</Text>
              </View>
            </View>
            <View style={styles.View_815_1025}>
              <View style={styles.View_815_1026}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e29c28ab-173a-468a-af43-2f38dcd512c6"
                  }}
                  style={styles.ImageBackground_815_1027}
                />
                <View style={styles.View_815_1028}>
                  <Text style={styles.Text_815_1028}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    auctor sit .
                  </Text>
                </View>
              </View>
              <View style={styles.View_815_1029}>
                <Text style={styles.Text_815_1029}>
                  auctor sit iaculis in arcu. Vulputate nulla lobortis mauris
                  eget sit. Nulla scelerisque scelerisque congue ac consequat,
                  aliquam molestie lectus eu. Congue iaculis integer curabitur
                  semper sit nunc.
                </Text>
              </View>
            </View>
            <View style={styles.View_815_1030}>
              <View style={styles.View_815_1031}>
                <Text style={styles.Text_815_1031}>Vy Pham</Text>
              </View>
              <View style={styles.View_815_1032}>
                <Text style={styles.Text_815_1032}>Blogger &amp; Founder</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_815_1033}>
        <View style={styles.View_815_1034}>
          <View style={styles.View_815_1035}>
            <View style={styles.View_815_1036}>
              <Text style={styles.Text_815_1036}>About Us</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abe996e3-3b52-4074-a1ff-356fc57bf8f3"
              }}
              style={styles.ImageBackground_815_1037}
            />
            <View style={styles.View_815_1040}>
              <Text style={styles.Text_815_1040}>
                Explore the world with Us
              </Text>
            </View>
          </View>
          <View style={styles.View_815_1041}>
            <Text style={styles.Text_815_1041}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </Text>
          </View>
        </View>
        <View style={styles.View_815_1042}>
          <View style={styles.View_815_1043}>
            <View style={styles.View_815_1044} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6af42036-03a7-4b8a-ba19-56c7c6a97075"
              }}
              style={styles.ImageBackground_815_1045}
            />
          </View>
          <View style={styles.View_815_1046} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5cd08e7c-d0bf-468d-bbd4-b696fa512434"
            }}
            style={styles.ImageBackground_815_1047}
          />
        </View>
      </View>
      <View style={styles.View_815_1050}>
        <View style={styles.View_815_1051}>
          <View style={styles.View_815_1052}>
            <Text style={styles.Text_815_1052}>Testimony</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e3822dc-e4e5-4f98-830e-5bb8d2a839ec"
            }}
            style={styles.ImageBackground_815_1053}
          />
          <View style={styles.View_815_1056}>
            <Text style={styles.Text_815_1056}>Happy customers</Text>
          </View>
        </View>
        <View style={styles.View_815_1057}>
          <View style={styles.View_815_1058}>
            <View style={styles.View_815_1059}>
              <View style={styles.View_815_1060}>
                <View style={styles.View_815_1061} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9f1a2ed-506c-454a-ad3f-4d8c7741716e"
                  }}
                  style={styles.ImageBackground_815_1062}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc0de996-9202-40a6-b827-baabae05e917"
                }}
                style={styles.ImageBackground_815_1063}
              />
            </View>
            <View style={styles.View_815_1064}>
              <View style={styles.View_815_1065}>
                <Text style={styles.Text_815_1065}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor
                  sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
                  Nulla scelerisque scelerisque congue.
                </Text>
              </View>
              <View style={styles.View_815_1066}>
                <View style={styles.View_815_1067}>
                  <Text style={styles.Text_815_1067}>Tomi Xiaomi</Text>
                </View>
                <View style={styles.View_815_1068}>
                  <Text style={styles.Text_815_1068}>Mafia Anh Kuoc</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_815_1069}>
            <View style={styles.View_815_1070}>
              <View style={styles.View_815_1071}>
                <View style={styles.View_815_1072} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d64574f-3114-4bed-96bc-d1ab82ddc0eb"
                  }}
                  style={styles.ImageBackground_815_1073}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/930e8b85-92fe-4c27-807a-20aec708d1e8"
                  }}
                  style={styles.ImageBackground_815_1074}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/390cb6da-2802-4f78-8312-4e5abd4ec099"
                }}
                style={styles.ImageBackground_815_1075}
              />
            </View>
            <View style={styles.View_815_1076}>
              <View style={styles.View_815_1077}>
                <Text style={styles.Text_815_1077}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor
                  sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
                  Nulla scelerisque scelerisque congue.
                </Text>
              </View>
              <View style={styles.View_815_1078}>
                <View style={styles.View_815_1079}>
                  <Text style={styles.Text_815_1079}>Pepe The Frog</Text>
                </View>
                <View style={styles.View_815_1080}>
                  <Text style={styles.Text_815_1080}>Chu ech xanh </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_815_1081}>
          <View style={styles.View_815_1082}>
            <View style={styles.View_815_1083}>
              <View style={styles.View_815_1084}>
                <View style={styles.View_815_1085} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6989606-d5ba-4d5e-986e-33f086a338dc"
                  }}
                  style={styles.ImageBackground_815_1086}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9423c836-851e-41be-9382-cdfd6b169bbf"
                  }}
                  style={styles.ImageBackground_815_1087}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5446682d-554f-4cc8-bdf4-d254e74a8863"
                }}
                style={styles.ImageBackground_815_1088}
              />
            </View>
            <View style={styles.View_815_1089}>
              <View style={styles.View_815_1090}>
                <Text style={styles.Text_815_1090}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor
                  sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
                  Nulla scelerisque scelerisque congue.
                </Text>
              </View>
              <View style={styles.View_815_1091}>
                <View style={styles.View_815_1092}>
                  <Text style={styles.Text_815_1092}>Hai ten Cat</Text>
                </View>
                <View style={styles.View_815_1093}>
                  <Text style={styles.Text_815_1093}>The Black Kat</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_815_1094}>
            <View style={styles.View_815_1095}>
              <View style={styles.View_815_1096}>
                <View style={styles.View_815_1097} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a528c203-85b9-4d81-9ca8-74387fb8b4b9"
                  }}
                  style={styles.ImageBackground_815_1098}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e766152-c550-417a-b91f-d6960fd8487c"
                  }}
                  style={styles.ImageBackground_815_1099}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad14eec3-4780-4d0f-99ac-ea5dc548f57d"
                }}
                style={styles.ImageBackground_815_1100}
              />
            </View>
            <View style={styles.View_815_1101}>
              <View style={styles.View_815_1102}>
                <Text style={styles.Text_815_1102}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor
                  sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
                  Nulla scelerisque scelerisque congue.
                </Text>
              </View>
              <View style={styles.View_815_1103}>
                <View style={styles.View_815_1104}>
                  <Text style={styles.Text_815_1104}>Pussy Cat</Text>
                </View>
                <View style={styles.View_815_1105}>
                  <Text style={styles.Text_815_1105}>Ching Chong Thomas</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_815_1106}>
        <View style={styles.View_815_1107}>
          <View style={styles.View_815_1108}>
            <View style={styles.View_815_1109} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c62df08b-b42c-4841-ab56-8eb471b77265"
              }}
              style={styles.ImageBackground_815_1110}
            />
          </View>
          <View style={styles.View_815_1111} />
        </View>
        <View style={styles.View_815_1114}>
          <View style={styles.View_815_1115}>
            <View style={styles.View_815_1116}>
              <View style={styles.View_815_1117}>
                <Text style={styles.Text_815_1117}>Instagram</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20b3d2c7-31ff-49c0-af3a-f9e407125362"
                }}
                style={styles.ImageBackground_815_1118}
              />
              <View style={styles.View_815_1121}>
                <Text style={styles.Text_815_1121}>Photo Gallery</Text>
              </View>
            </View>
            <View style={styles.View_815_1122}>
              <Text style={styles.Text_815_1122}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
              </Text>
            </View>
            <View style={styles.View_815_1123}>
              <View style={styles.View_815_1124}>
                <Text style={styles.Text_815_1124}>View More</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_815_1125}>
            <View style={styles.View_815_1126}>
              <View style={styles.View_815_1127}>
                <View style={styles.View_815_1128} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54390d8f-9ff6-42f9-b6ad-9164ac5911f7"
                  }}
                  style={styles.ImageBackground_815_1129}
                />
              </View>
              <View style={styles.View_815_1130}>
                <View style={styles.View_815_1131} />
              </View>
            </View>
            <View style={styles.View_815_1134}>
              <View style={styles.View_815_1135}>
                <View style={styles.View_815_1136} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5ede68a-b568-4bf4-b469-bf5d58f0bdcf"
                  }}
                  style={styles.ImageBackground_815_1137}
                />
              </View>
              <View style={styles.View_815_1138}>
                <View style={styles.View_815_1139} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92e3edc2-2298-43e1-9388-64320d1ec447"
                  }}
                  style={styles.ImageBackground_815_1140}
                />
              </View>
            </View>
            <View style={styles.View_815_1142}>
              <View style={styles.View_815_1143}>
                <View style={styles.View_815_1144} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc77dafe-169c-460b-aac1-572bb9f38d7e"
                  }}
                  style={styles.ImageBackground_815_1145}
                />
              </View>
              <View style={styles.View_815_1146}>
                <View style={styles.View_815_1147} />
              </View>
            </View>
            <View style={styles.View_815_1150}>
              <View style={styles.View_815_1151}>
                <View style={styles.View_815_1152} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b68fec55-afea-4e8f-ad6d-cb9935b494b3"
                  }}
                  style={styles.ImageBackground_815_1153}
                />
              </View>
              <View style={styles.View_815_1154}>
                <View style={styles.View_815_1155} />
              </View>
            </View>
            <View style={styles.View_815_1158}>
              <View style={styles.View_815_1159}>
                <View style={styles.View_815_1160} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f4de430-e651-4996-a0c0-6581eae4f3ec"
                  }}
                  style={styles.ImageBackground_815_1161}
                />
              </View>
              <View style={styles.View_815_1162}>
                <View style={styles.View_815_1163} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_815_1166}>
        <View style={styles.View_815_1167}>
          <View style={styles.View_815_1168}>
            <View style={styles.View_815_1169} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/957f3bcf-a893-43ad-9234-47d87bd2aa7b"
              }}
              style={styles.ImageBackground_815_1170}
            />
          </View>
          <View style={styles.View_815_1171} />
        </View>
        <View style={styles.View_815_1174}>
          <View style={styles.View_815_1175}>
            <View style={styles.View_815_1176}>
              <View style={styles.View_815_1177}>
                <View style={styles.View_815_1178}>
                  <View style={styles.View_815_1179}>
                    <Text style={styles.Text_815_1179}>Contact Us</Text>
                  </View>
                  <View style={styles.View_815_1180}>
                    <View style={styles.View_815_1181}>
                      <Text style={styles.Text_815_1181}>
                        31 W 10rd St, New Fork, NYC 3110, SUS
                      </Text>
                    </View>
                    <View style={styles.View_815_1182}>
                      <Text style={styles.Text_815_1182}>+1 234 567 JQK</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_815_1183}>
                  <View style={styles.View_815_1184}>
                    <Text style={styles.Text_815_1184}>Working Hours</Text>
                  </View>
                  <View style={styles.View_815_1185}>
                    <View style={styles.View_815_1186}>
                      <Text style={styles.Text_815_1186}>
                        Monday-Friday: 08:00 am -12:00 am
                      </Text>
                    </View>
                    <View style={styles.View_815_1187}>
                      <Text style={styles.Text_815_1187}>
                        Saturday-Sunday: 07:00am -11:00 pm
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_815_1188}>
                <View style={styles.View_815_1189}>
                  <Text style={styles.Text_815_1189}>Bon Appetit Voyage</Text>
                </View>
                <View style={styles.View_815_1190}>
                  <View style={styles.View_815_1191}>
                    <View style={styles.View_815_1192}>
                      <Text style={styles.Text_815_1192}>
                        “To live a full life, you have to fill your stomach
                        first ”
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5434fc9-477d-4b10-9a9a-cf12f3586df9"
                      }}
                      style={styles.ImageBackground_815_1193}
                    />
                    <View style={styles.View_815_1196}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80a7698a-5ea1-4039-90b0-6c601e42265c"
                        }}
                        style={styles.ImageBackground_815_1197}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8041d05e-348a-4072-b37e-e1d4b491434c"
                        }}
                        style={styles.ImageBackground_815_1199}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c4e85c4-9e87-4f32-b4c1-6161e96b1940"
                        }}
                        style={styles.ImageBackground_815_1201}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_815_1203}>
              <View style={styles.View_815_1204}>
                <Text style={styles.Text_815_1204}>
                  2022 Bon Appetit Voyage. All Wrongs reserved.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_815_1205}>
            <View style={styles.View_815_1206}>
              <View style={styles.View_815_1207}>
                <View style={styles.View_815_1208}>
                  <Text style={styles.Text_815_1208}>Newsletter</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6816e288-5caa-4f67-b3e2-3fea76520e8f"
                  }}
                  style={styles.ImageBackground_815_1209}
                />
                <View style={styles.View_815_1212}>
                  <Text style={styles.Text_815_1212}>
                    Subscribe to Our Newsletter
                  </Text>
                </View>
              </View>
              <View style={styles.View_815_1213}>
                <Text style={styles.Text_815_1213}>
                  And never miss latest Updates!
                </Text>
              </View>
            </View>
            <View style={styles.View_815_1214}>
              <View style={styles.View_815_1215}>
                <View style={styles.View_815_1216} />
                <View style={styles.View_815_1217}>
                  <View style={styles.View_815_1218}>
                    <Text style={styles.Text_815_1218}>Email Address</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_815_1219}>
                <View style={styles.View_815_1220}>
                  <Text style={styles.Text_815_1220}>Subscribe</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_815_1221}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9793357-fd77-4efe-af25-ae7782274e8d"
              }}
              style={styles.ImageBackground_815_1223}
            />
            <View style={styles.View_815_1224}>
              <Text style={styles.Text_815_1224}>Top</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_815_1225}>
        <View style={styles.View_815_1226}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c732c3b6-232a-4587-aab8-6b8a869b1c89"
            }}
            style={styles.ImageBackground_815_1227}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ef18b70-7ed0-45cf-9b12-6bdddb2dd248"
            }}
            style={styles.ImageBackground_815_1230}
          />
        </View>
        <View style={styles.View_815_1249}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2625b78f-683b-4e64-b258-73b965d94b01"
            }}
            style={styles.ImageBackground_815_1250}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b34aa71c-7338-4063-80f3-d5ff1991e9b5"
            }}
            style={styles.ImageBackground_815_1253}
          />
        </View>
        <View style={styles.View_815_1272}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f37a7d6-9b06-4c7c-85d2-6ca2e2f3c07f"
            }}
            style={styles.ImageBackground_815_1273}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa2ca1b9-f1cf-47d7-9a18-60bec03f1804"
            }}
            style={styles.ImageBackground_815_1276}
          />
        </View>
        <View style={styles.View_815_1295}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9fcb8dd3-9686-4ba4-9878-7c506e0b0dc1"
            }}
            style={styles.ImageBackground_815_1296}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2003d5c-5098-4a4c-9c10-fe1bb431f745"
            }}
            style={styles.ImageBackground_815_1299}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(12, 12, 12, 1)" },
  View_2: { height: hp("981%") },
  View_815_934: {
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
  ImageBackground_815_935: {
    width: wp("106%"),
    height: hp("370%"),
    top: hp("1468%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_815_936: {
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
  ImageBackground_815_937: {
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
  View_815_938: {
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
  View_815_939: {
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
  View_815_940: {
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
  View_815_941: {
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
  View_815_942: {
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
  Text_815_942: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.76,
    textTransform: "uppercase"
  },
  View_815_943: {
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
  TouchableOpacity_815_944: {
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
  Text_815_944: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  TouchableOpacity_815_945: {
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
  Text_815_945: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  TouchableOpacity_815_946: {
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
  Text_815_946: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  TouchableOpacity_815_947: {
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
  Text_815_947: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_948: {
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
  View_815_949: {
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
  View_815_950: {
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
  ImageBackground_815_951: {
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
  View_815_953: {
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
  View_815_954: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_955: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_955: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 72,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 3.6,
    textTransform: "capitalize"
  },
  View_815_956: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_957: {
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
  Text_815_957: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_958: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_815_960: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_960: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  View_815_961: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("122%"),
    minHeight: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("130%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_962: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_963: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_963: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_964: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_815_967: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_815_967: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  View_815_968: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_969: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_970: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_970: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_971: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("77%"),
    minHeight: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%")
  },
  ImageBackground_815_972: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("77%"),
    minHeight: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_815_973: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("77%"),
    minHeight: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_974: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_975: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_976: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_977: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_978: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_979: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_979: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 36,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.8,
    textTransform: "capitalize"
  },
  View_815_981: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_982: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_983: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_983: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 36,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.8,
    textTransform: "capitalize"
  },
  ImageBackground_815_984: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_815_987: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_815_987: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  ImageBackground_815_988: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("5%")
  },
  View_815_989: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_990: {
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
  Text_815_990: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 36,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.8,
    textTransform: "capitalize"
  },
  ImageBackground_815_991: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_815_994: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_815_994: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  ImageBackground_815_995: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("5%")
  },
  View_815_996: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_997: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_997: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 36,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.8,
    textTransform: "capitalize"
  },
  ImageBackground_815_998: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_815_1001: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_815_1001: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_1002: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("143%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("442%")
  },
  View_815_1003: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("143%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_815_1004: {
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
  View_815_1005: {
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
  ImageBackground_815_1006: {
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
  View_815_1007: {
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
  View_815_1010: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("108%"),
    minHeight: hp("108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1011: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("108%"),
    minHeight: hp("108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1012: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(220, 202, 135, 1)"
  },
  View_815_1013: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%"),
    backgroundColor: "rgba(220, 202, 135, 1)"
  },
  View_815_1014: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("101%"),
    minHeight: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  View_815_1015: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("101%"),
    minHeight: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_1016: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("101%"),
    minHeight: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_815_1017: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("106%"),
    minHeight: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("-3%"),
    resizeMode: "cover"
  },
  View_815_1018: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1019: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1020: {
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
  Text_815_1020: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_1021: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_815_1024: {
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
  Text_815_1024: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  View_815_1025: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1026: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_815_1027: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1028: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_815_1028: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1029: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_815_1029: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1030: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1031: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1031: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_1032: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_815_1032: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1033: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("148%"),
    minHeight: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("273%")
  },
  View_815_1034: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1035: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1036: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1036: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_1037: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  View_815_1040: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_815_1040: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  View_815_1041: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_815_1041: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1042: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("104%"),
    minHeight: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44%")
  },
  View_815_1043: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("104%"),
    minHeight: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1044: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("104%"),
    minHeight: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_1045: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("104%"),
    minHeight: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_1046: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("104%"),
    minHeight: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(12, 12, 12, 1)"
  },
  ImageBackground_815_1047: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("44%")
  },
  View_815_1050: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("605%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1051: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1052: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1052: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_1053: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_815_1056: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_815_1056: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  View_815_1057: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1058: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1059: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1060: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1061: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_1062: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_815_1063: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("23%")
  },
  View_815_1064: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1065: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1065: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1066: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1067: {
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
  Text_815_1067: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_1068: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_815_1068: {
    color: "rgba(245, 239, 219, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1069: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1070: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1071: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1072: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_1073: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_815_1074: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_815_1075: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("23%")
  },
  View_815_1076: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1077: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1077: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1078: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1079: {
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
  Text_815_1079: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_1080: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_815_1080: {
    color: "rgba(245, 239, 219, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1081: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("65%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1082: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1083: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1084: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1085: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_1086: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_815_1087: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_815_1088: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("23%")
  },
  View_815_1089: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1090: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1090: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1091: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1092: {
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
  Text_815_1092: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_1093: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_815_1093: {
    color: "rgba(245, 239, 219, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1094: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1095: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1096: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1097: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_1098: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_815_1099: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_815_1100: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("23%")
  },
  View_815_1101: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1102: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1102: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1103: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1104: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_815_1104: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_1105: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_815_1105: {
    color: "rgba(245, 239, 219, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1106: {
    width: wp("130%"),
    minWidth: wp("130%"),
    height: hp("96%"),
    minHeight: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("720%")
  },
  View_815_1107: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("96%"),
    minHeight: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_815_1108: {
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
  View_815_1109: {
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
  ImageBackground_815_1110: {
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
  View_815_1111: {
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
  View_815_1114: {
    width: wp("114%"),
    minWidth: wp("114%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1115: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1116: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1117: {
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
  Text_815_1117: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_1118: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_815_1121: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_815_1121: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  View_815_1122: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_815_1122: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1123: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%"),
    backgroundColor: "rgba(220, 202, 135, 1)"
  },
  View_815_1124: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_815_1124: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1125: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_815_1126: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1127: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1128: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 1
  },
  ImageBackground_815_1129: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_1130: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1131: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 2
  },
  View_815_1134: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%")
  },
  View_815_1135: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1136: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_815_1137: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_1138: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1139: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 2
  },
  ImageBackground_815_1140: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_815_1142: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("0%")
  },
  View_815_1143: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1144: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 1
  },
  ImageBackground_815_1145: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_1146: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1147: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 2
  },
  View_815_1150: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("0%")
  },
  View_815_1151: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1152: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 1
  },
  ImageBackground_815_1153: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_1154: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1155: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 2
  },
  View_815_1158: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("0%")
  },
  View_815_1159: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1160: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 1
  },
  ImageBackground_815_1161: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_815_1162: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1163: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(220, 202, 135, 1)",
    borderWidth: 2
  },
  View_815_1166: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("145%"),
    minHeight: hp("145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("837%")
  },
  View_815_1167: {
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
  View_815_1168: {
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
  View_815_1169: {
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
  ImageBackground_815_1170: {
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
  View_815_1171: {
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
  View_815_1174: {
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
  View_815_1175: {
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
  View_815_1176: {
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
  View_815_1177: {
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
  View_815_1178: {
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
  View_815_1179: {
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
  Text_815_1179: {
    color: "rgba(245, 239, 219, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_1180: {
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
  View_815_1181: {
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
  Text_815_1181: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1182: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_815_1182: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1183: {
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
  View_815_1184: {
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
  Text_815_1184: {
    color: "rgba(245, 239, 219, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.28,
    textTransform: "capitalize"
  },
  View_815_1185: {
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
  View_815_1186: {
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
  Text_815_1186: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1187: {
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
  Text_815_1187: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1188: {
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
  View_815_1189: {
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
  Text_815_1189: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 35,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.76,
    textTransform: "uppercase"
  },
  View_815_1190: {
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
  View_815_1191: {
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
  View_815_1192: {
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
  Text_815_1192: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  ImageBackground_815_1193: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_815_1196: {
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
  ImageBackground_815_1197: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_815_1199: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_815_1201: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_815_1203: {
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
  View_815_1204: {
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
  Text_815_1204: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1205: {
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
  View_815_1206: {
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
  View_815_1207: {
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
  View_815_1208: {
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
  Text_815_1208: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.92,
    textTransform: "capitalize"
  },
  ImageBackground_815_1209: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_815_1212: {
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
  Text_815_1212: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 51,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.92,
    textTransform: "capitalize"
  },
  View_815_1213: {
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
  Text_815_1213: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1214: {
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
  View_815_1215: {
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
  View_815_1216: {
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
  View_815_1217: {
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
  View_815_1218: {
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
  Text_815_1218: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "capitalize"
  },
  View_815_1219: {
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
  View_815_1220: {
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
  Text_815_1220: {
    color: "rgba(12, 12, 12, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_815_1221: {
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
  ImageBackground_815_1223: {
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
  View_815_1224: {
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
  Text_815_1224: {
    color: "rgba(220, 202, 135, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "uppercase"
  },
  View_815_1225: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("575%"),
    minHeight: hp("575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("271%")
  },
  View_815_1226: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("555%")
  },
  ImageBackground_815_1227: {
    width: wp("3%"),
    height: hp("9%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_815_1230: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1249: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("324%")
  },
  ImageBackground_815_1250: {
    width: wp("3%"),
    height: hp("9%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_815_1253: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1272: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("158%")
  },
  ImageBackground_815_1273: {
    width: wp("3%"),
    height: hp("9%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_815_1276: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_815_1295: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("0%")
  },
  ImageBackground_815_1296: {
    width: wp("3%"),
    height: hp("9%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_815_1299: {
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
