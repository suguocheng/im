package plugin

var plugins = make(map[string]Plugin)

func Register(p Plugin) {
	plugins[p.Name()] = p
}

func Get(name string) Plugin {
	return plugins[name]
}

func All() []Plugin {
	var list []Plugin
	for _, p := range plugins {
		list = append(list, p)
	}
	return list
}
