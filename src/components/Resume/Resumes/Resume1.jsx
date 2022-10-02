import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { getSkills, getData } from "../../../redux/selectors";
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1 solid black",
    margin: 25,
    paddingBottom: 14,
  },

  name: {
    fontSize: "30",
    marginBottom: 20,
  },
  details: {
    fontSize: 12,
    alignContent: "end",
  },
  page1: { flexDirection: "row", marginLeft: 25, marginRight: 25 },
  section1: { width: "28%" },
  section2: { width: "72%" },
  title: {
    fontSize: "25",
  },
  text: { fontSize: "14", marginBottom: 15, marginTop: 15 },
  education: { flexDirection: "row", width: "100%" },
  poject: { fontSize: "18", marginTop: 10 },
  container: { width: "200", marginTop: 10 },
  skill: {},
});

// Create Document Component
const MyDocument = () => {
  const skills = useSelector(getSkills);
  const data = useSelector(getData);
  console.log("====================================");
  console.log(data);
  console.log("====================================");
  return (
    <PDFViewer width="100%" height="1000">
      <Document>
        <Page size="A4">
          <View style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.name}>Stefan dunikjovskiy</Text>
              <Text>react dev</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.details}>Ukraine, Ternopil</Text>
              <Text style={styles.details}>+380 99 482-03-46</Text>
              <Text style={styles.details}>stefandunikovskyi@gmail.com</Text>
              <Text style={styles.details}>web</Text>
            </View>
          </View>
          <View style={styles.page1}>
            <View style={styles.section1}>
              <Text style={styles.title}>Skills</Text>

              {skills.map((skill) => (
                <Text key={skill.key} style={styles.skill}>
                  &bull; {skill.label}
                </Text>
              ))}
            </View>
            <View style={styles.section2}>
              <Text style={styles.title}>Summary</Text>
              <Text style={styles.text}>
                Summary Summary Summary Summary Summary Summary Summary Summary
                Summary Summary Summary
              </Text>
              <Text style={styles.title}>Projects</Text>
              <Text style={styles.poject}>filmoteka</Text>

              <Link>
                <Text style={styles.details}>www.wwerw.com</Text>
              </Link>
              <Text style={styles.text}>
                Summary Summary Summary Summary Summary Summary Summary Summary
                Summary Summary Summary
              </Text>
              <Text style={styles.title}>Education</Text>
              <View style={styles.education}>
                <Text style={styles.container}>
                  Summary Summary Summary Summary
                </Text>
                <Text style={styles.container}>
                  Summary Summary Summary Summary
                </Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
export default MyDocument;
